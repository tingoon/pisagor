import {
  type CollectionItem,
  createListCollection,
} from "@ark-ui/solid/collection";
import { ark } from "@ark-ui/solid/factory";
import type {
  SelectClearTriggerProps,
  SelectContentProps,
  SelectItemGroupLabelProps,
  SelectItemProps,
  SelectItemGroupProps as SelectPrimitiveItemGroupProps,
  SelectRootProps as SelectPrimitiveRootProps,
  SelectTriggerProps as SelectPrimitiveTriggerProps,
  SelectValueTextProps,
} from "@ark-ui/solid/select";
import {
  Select as SelectPrimitive,
  useSelectContext,
} from "@ark-ui/solid/select";
import type { SelectProps as BaseSelectRootProps } from "@pisagor/props";
import {
  type FormControlShellVariantProps,
  formControlShellRecipe,
  selectRecipe,
} from "@pisagor/recipes";
import { cn } from "@pisagor/utils";
import type { ComponentProps, JSX } from "solid-js";
import {
  createContext,
  createMemo,
  For,
  Show,
  splitProps,
  useContext,
} from "solid-js";
import { Portal } from "solid-js/web";
import { createSlotRecipeContext } from "../internal/create-slot-recipe-context";
import { CaretUpDownIcon, CheckIcon, XIcon } from "../internal/icons";
import { Separator, type SeparatorProps } from "./separator";
import { useFormControlSurface } from "./surface/use-form-control-surface";

// #region Context
const { Context: SelectStylesContext } = createSlotRecipeContext({
  name: "Select",
  recipe: selectRecipe,
});

/** Parts may render under a bare Ark root, so fall back to the default recipe. */
function useSelectSlots() {
  const styles = useContext(SelectStylesContext);
  return () => styles?.slots ?? selectRecipe();
}

/** Root-level control props (`variant`, `size`) read by `Select.Trigger`. */
const SelectControlContext = createContext<FormControlShellVariantProps>({});
// #endregion

type FormControlVariant = "primary" | "secondary";

interface SelectPresetItem {
  label: string;
  value: string;
}

export type SelectRootProps<T extends CollectionItem = CollectionItem> = Omit<
  SelectPrimitiveRootProps<T>,
  "onValueChange"
> & {
  /** Visual shell variant applied to the trigger. Defaults to `primary`. */
  variant?: FormControlVariant;
  /** Trigger size. Defaults to `md`. */
  size?: FormControlShellVariantProps["size"];
  onValueChange?: (value: string | string[]) => void;
} & BaseSelectRootProps;

export interface SelectProps
  extends Omit<SelectRootProps, "children" | "collection"> {
  clearable?: boolean;
  items?: Array<SelectPresetItem | string>;
  placeholder?: string;
}

export interface SelectTriggerProps
  extends Omit<SelectPrimitiveTriggerProps, "size">,
    FormControlShellVariantProps {
  clearable?: boolean;
}

export interface SelectItemGroupProps extends SelectPrimitiveItemGroupProps {
  heading?: string | JSX.Element;
}

export type SelectEmptyProps = ComponentProps<typeof ark.div>;

export const SelectContext = SelectPrimitive.Context;

export function SelectRoot<T extends CollectionItem = CollectionItem>(
  props: SelectRootProps<T>,
): JSX.Element {
  const [local, rest] = splitProps(props as SelectRootProps, [
    "children",
    "onValueChange",
    "variant",
    "size",
    "recipe",
  ]);

  const slots = createMemo(() => (local.recipe ?? selectRecipe)());
  const control: FormControlShellVariantProps = {
    get size() {
      return local.size;
    },
    get variant() {
      return local.variant;
    },
  };

  return (
    <SelectStylesContext
      value={{
        get slots() {
          return slots();
        },
        variants: {},
      }}
    >
      <SelectControlContext.Provider value={control}>
        <SelectPrimitive.Root
          {...rest}
          onValueChange={
            local.onValueChange
              ? (details) => local.onValueChange?.(details.value)
              : undefined
          }
        >
          {local.children}
          <SelectPrimitive.HiddenSelect />
        </SelectPrimitive.Root>
      </SelectControlContext.Provider>
    </SelectStylesContext>
  );
}

export function SelectTrigger(props: SelectTriggerProps): JSX.Element {
  const [local, rest] = splitProps(props, [
    "size",
    "variant",
    "clearable",
    "children",
    "class",
  ]);
  const slots = useSelectSlots();
  const control = useContext(SelectControlContext);
  const size = () => local.size ?? control.size ?? "md";
  const surfaceVariant = useFormControlSurface();
  const variant = () =>
    local.variant ?? control.variant ?? ("primary" as FormControlVariant);
  const clearable = () => local.clearable ?? false;

  return (
    <SelectPrimitive.Control>
      <SelectPrimitive.Trigger
        {...rest}
        class={cn(
          formControlShellRecipe({
            size: size(),
            surfaceVariant,
            variant: variant(),
          }),
          slots().trigger(),
          local.class,
        )}
        data-variant={variant()}
      >
        {local.children}
        <div class={slots().triggerActions()}>
          <Show when={clearable()}>
            <SelectClearTrigger>
              <XIcon />
            </SelectClearTrigger>
          </Show>
          <SelectPrimitive.Indicator>
            <CaretUpDownIcon />
          </SelectPrimitive.Indicator>
        </div>
      </SelectPrimitive.Trigger>
    </SelectPrimitive.Control>
  );
}

export function SelectSeparator(props: SeparatorProps): JSX.Element {
  const [local, rest] = splitProps(props, ["class"]);
  const slots = useSelectSlots();

  return (
    <Separator
      {...rest}
      class={slots().separator({ class: local.class })}
      data-part="separator"
      data-scope="select"
    />
  );
}

export function SelectValueText(props: SelectValueTextProps): JSX.Element {
  const [local, rest] = splitProps(props, ["class"]);
  const slots = useSelectSlots();
  return (
    <SelectPrimitive.ValueText
      {...rest}
      class={slots().valueText({ class: local.class })}
    />
  );
}

export function SelectContent(props: SelectContentProps): JSX.Element {
  const [local, rest] = splitProps(props, ["class"]);
  const slots = useSelectSlots();

  return (
    <Portal>
      <SelectPrimitive.Positioner>
        <SelectPrimitive.Content
          {...rest}
          class={slots().content({ class: local.class })}
        />
      </SelectPrimitive.Positioner>
    </Portal>
  );
}

export function SelectItemGroup(props: SelectItemGroupProps): JSX.Element {
  const [local, rest] = splitProps(props, ["children", "heading"]);

  return (
    <SelectPrimitive.ItemGroup {...rest}>
      <Show when={local.heading !== undefined && local.heading !== false}>
        <SelectItemGroupLabel>{local.heading}</SelectItemGroupLabel>
      </Show>
      {local.children}
    </SelectPrimitive.ItemGroup>
  );
}

export function SelectItemGroupLabel(
  props: SelectItemGroupLabelProps,
): JSX.Element {
  const [local, rest] = splitProps(props, ["class"]);
  const slots = useSelectSlots();
  return (
    <SelectPrimitive.ItemGroupLabel
      {...rest}
      class={slots().itemGroupLabel({ class: local.class })}
    />
  );
}

export function SelectItem(props: SelectItemProps): JSX.Element {
  const [local, rest] = splitProps(props, ["children", "class"]);
  const slots = useSelectSlots();

  return (
    <SelectPrimitive.Item
      {...rest}
      class={slots().item({ class: local.class })}
    >
      <SelectPrimitive.ItemText class={slots().itemText()}>
        {local.children}
      </SelectPrimitive.ItemText>
      <span class={slots().itemIndicator()}>
        <SelectPrimitive.ItemIndicator>
          <CheckIcon />
        </SelectPrimitive.ItemIndicator>
      </span>
    </SelectPrimitive.Item>
  );
}

export function SelectClearTrigger(
  props: SelectClearTriggerProps,
): JSX.Element {
  const [local, rest] = splitProps(props, ["class"]);
  const slots = useSelectSlots();

  return (
    <SelectPrimitive.ClearTrigger
      {...rest}
      aria-label="Clear selected value(s)"
      class={slots().clearTrigger({ class: local.class })}
    />
  );
}

export function SelectEmpty(props: SelectEmptyProps): JSX.Element {
  const [local, rest] = splitProps(props, ["class"]);
  const select = useSelectContext();
  const slots = useSelectSlots();

  return (
    <Show when={select().empty}>
      <ark.div
        {...rest}
        class={slots().empty({ class: local.class })}
        role="presentation"
      />
    </Show>
  );
}

export function SelectShorthand(props: SelectProps): JSX.Element {
  const [local, rest] = splitProps(props, [
    "clearable",
    "items",
    "placeholder",
  ]);
  const normalized = createMemo(() =>
    (local.items ?? []).map((item) =>
      typeof item === "string" ? { label: item, value: item } : item,
    ),
  );
  const collection = createMemo(() =>
    createListCollection({ items: normalized() }),
  );

  return (
    <SelectRoot {...rest} collection={collection()}>
      <SelectTrigger clearable={local.clearable ?? false}>
        <SelectValueText placeholder={local.placeholder} />
      </SelectTrigger>
      <SelectContent>
        <For each={normalized()}>
          {(item) => <SelectItem item={item}>{item.label}</SelectItem>}
        </For>
      </SelectContent>
    </SelectRoot>
  );
}

export type {
  SelectClearTriggerProps,
  SelectContentProps,
  SelectItemGroupLabelProps,
  SelectItemProps,
  SelectValueTextProps,
} from "@ark-ui/solid/select";

export const Select = Object.assign(SelectShorthand, {
  ClearTrigger: SelectClearTrigger,
  Content: SelectContent,
  Context: SelectContext,
  Empty: SelectEmpty,
  Item: SelectItem,
  ItemGroup: SelectItemGroup,
  ItemGroupLabel: SelectItemGroupLabel,
  Root: SelectRoot,
  Separator: SelectSeparator,
  Trigger: SelectTrigger,
  ValueText: SelectValueText,
});
