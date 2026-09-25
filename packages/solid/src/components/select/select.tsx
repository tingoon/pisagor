import { type CollectionItem, createListCollection } from "@ark-ui/solid/collection";
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
import { Select as SelectPrimitive, useSelectContext } from "@ark-ui/solid/select";
import {
  type FormControlShellVariantProps,
  formControlShellRecipe,
} from "@pisagor/recipes/form-control";
import { selectRecipe } from "@pisagor/recipes/select";
import { cn } from "@pisagor/utils";
import type { ComponentProps, JSX } from "solid-js";
import { createMemo, For, Show, splitProps } from "solid-js";
import { Portal } from "solid-js/web";
import { CaretUpDownIcon, CheckIcon, XIcon } from "../../internal/icons";
import { Separator, type SeparatorProps } from "../separator";
import { useFormControlSurface } from "../surface/use-form-control-surface";
import { SelectRootContext, useSelectRoot } from "./select.context";

type FormControlVariant = "primary" | "secondary";

interface SelectPresetItem {
  label: string;
  value: string;
}

export type SelectRootProps<T extends CollectionItem = CollectionItem> = Omit<
  SelectPrimitiveRootProps<T>,
  "onValueChange"
> & {
  variant?: FormControlVariant;
  onValueChange?: (value: string | string[]) => void;
  recipe?: typeof selectRecipe;
};

export interface SelectProps extends Omit<SelectRootProps, "children" | "collection"> {
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
    "recipe",
  ]);
  const slots = () => (local.recipe ?? selectRecipe)();

  return (
    <SelectRootContext value={{ slots: slots() }}>
      <SelectPrimitive.Root
        {...rest}
        onValueChange={
          local.onValueChange ? (details) => local.onValueChange?.(details.value) : undefined
        }
      >
        {local.children}
        <SelectPrimitive.HiddenSelect />
      </SelectPrimitive.Root>
    </SelectRootContext>
  );
}

export function SelectTrigger(props: SelectTriggerProps): JSX.Element {
  const [local, rest] = splitProps(props, ["size", "variant", "clearable", "children", "class"]);
  const root = useSelectRoot();
  const slots = () => root?.slots ?? selectRecipe();
  const size = () => local.size ?? "md";
  const surfaceVariant = useFormControlSurface();
  const variant = () => local.variant ?? ("primary" as FormControlVariant);
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
  const root = useSelectRoot();
  const slots = () => root?.slots ?? selectRecipe();

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
  const root = useSelectRoot();
  const slots = () => root?.slots ?? selectRecipe();
  return <SelectPrimitive.ValueText {...rest} class={slots().valueText({ class: local.class })} />;
}

export function SelectContent(props: SelectContentProps): JSX.Element {
  const [local, rest] = splitProps(props, ["class"]);
  const root = useSelectRoot();
  const slots = () => root?.slots ?? selectRecipe();

  return (
    <Portal>
      <SelectPrimitive.Positioner>
        <SelectPrimitive.Content {...rest} class={slots().content({ class: local.class })} />
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

export function SelectItemGroupLabel(props: SelectItemGroupLabelProps): JSX.Element {
  const [local, rest] = splitProps(props, ["class"]);
  const root = useSelectRoot();
  const slots = () => root?.slots ?? selectRecipe();
  return (
    <SelectPrimitive.ItemGroupLabel
      {...rest}
      class={slots().itemGroupLabel({ class: local.class })}
    />
  );
}

export function SelectItem(props: SelectItemProps): JSX.Element {
  const [local, rest] = splitProps(props, ["children", "class"]);
  const root = useSelectRoot();
  const slots = () => root?.slots ?? selectRecipe();

  return (
    <SelectPrimitive.Item {...rest} class={slots().item({ class: local.class })}>
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

export function SelectClearTrigger(props: SelectClearTriggerProps): JSX.Element {
  const [local, rest] = splitProps(props, ["class"]);
  const root = useSelectRoot();
  const slots = () => root?.slots ?? selectRecipe();

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
  const root = useSelectRoot();
  const slots = () => root?.slots ?? selectRecipe();

  return (
    <Show when={select().empty}>
      <ark.div {...rest} class={slots().empty({ class: local.class })} role="presentation" />
    </Show>
  );
}

export function SelectShorthand(props: SelectProps): JSX.Element {
  const [local, rest] = splitProps(props, ["clearable", "items", "placeholder"]);
  const normalized = createMemo(() =>
    (local.items ?? []).map((item) =>
      typeof item === "string" ? { label: item, value: item } : item,
    ),
  );
  const collection = createMemo(() => createListCollection({ items: normalized() }));

  return (
    <SelectRoot {...rest} collection={collection()}>
      <SelectTrigger clearable={local.clearable ?? false}>
        <SelectValueText placeholder={local.placeholder} />
      </SelectTrigger>
      <SelectContent>
        <For each={normalized()}>{(item) => <SelectItem item={item}>{item.label}</SelectItem>}</For>
      </SelectContent>
    </SelectRoot>
  );
}
