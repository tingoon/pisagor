import {
  Select as SelectPrimitive,
  createListCollection,
  useSelectContext,
} from "@ark-ui/solid";
import type {
  CollectionItem,
  SelectClearTriggerProps,
  SelectContentProps,
  SelectItemGroupLabelProps,
  SelectItemGroupProps as SelectItemGroupPrimitiveProps,
  SelectItemProps,
  SelectRootProps as SelectRootPrimitiveProps,
  SelectTriggerProps as SelectTriggerPrimitiveProps,
  SelectValueTextProps,
} from "@ark-ui/solid";
import type {
  SelectContract,
  SelectItemGroupContract,
  SelectPresetItem as BaseSelectPresetItem,
  SelectRootContract,
} from "@pisagor/contracts";
import { selectRecipe } from "@pisagor/recipes";
import type { ComponentProps, JSX } from "solid-js";
import { createMemo, For, Show, splitProps } from "solid-js";
import { Portal } from "solid-js/web";
import {
  CaretUpDownIcon,
  CheckIcon,
  XIcon,
  createSlotRecipeContext,
} from "../internal";
import { useLocale } from "./provider/context";
import { Separator, type SeparatorProps } from "./separator";

// #region Context
const { Context, withContext, useStyles } = createSlotRecipeContext({
  name: "Select",
  recipe: selectRecipe,
});
// #endregion

// #region Types
interface SelectPresetItem extends Omit<BaseSelectPresetItem, "label"> {
  label: string;
}

export type SelectRootProps<T extends CollectionItem = CollectionItem> = Omit<
  SelectRootPrimitiveProps<T>,
  "onValueChange"
> &
  SelectRootContract & {
    onValueChange?: (value: string | string[]) => void;
  };

export interface SelectProps
  extends
    Omit<SelectRootProps, "children" | "collection">,
    Omit<SelectContract, "items" | "placeholder"> {
  /**
   * Whether to show a clear button when a value is selected.
   *
   * @defaultValue false
   */
  clearable?: boolean;
  items?: Array<SelectPresetItem | string>;
  placeholder?: string;
}

type SelectTriggerProps = Omit<SelectTriggerPrimitiveProps, "size"> & {
  /**
   * Whether to show a clear button when a value is selected.
   *
   * @defaultValue false
   */
  clearable?: boolean;
};

type SelectItemGroupProps = SelectItemGroupPrimitiveProps &
  SelectItemGroupContract & {
    heading?: string | JSX.Element;
  };

type SelectEmptyProps = ComponentProps<"div">;
// #endregion

// #region Parts
const SelectContext = SelectPrimitive.Context;

function Root<T extends CollectionItem = CollectionItem>(
  props: SelectRootProps<T>,
): JSX.Element {
  const [local, rest] = splitProps(props as SelectRootProps, [
    "children",
    "onValueChange",
    "size",
    "variant",
    "surfaceVariant",
    "recipe",
  ]);
  const recipe = () => local.recipe ?? selectRecipe;
  const resolved = () => ({
    size: local.size ?? "md",
    surfaceVariant: local.surfaceVariant,
    variant: local.variant,
  });
  const slots = createMemo(() => recipe()(resolved()));

  return (
    <Context
      value={{
        get slots() {
          return slots();
        },
        get variants() {
          return resolved() as never;
        },
      }}
    >
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
    </Context>
  );
}

const Control = withContext<ComponentProps<"div">>(SelectPrimitive.Control, {
  name: "Control",
});

const TriggerBase = withContext<SelectTriggerProps>(SelectPrimitive.Trigger, {
  name: "Trigger",
});

function Trigger(props: SelectTriggerProps): JSX.Element {
  const [local, rest] = splitProps(props, ["clearable", "children", "class"]);
  const { slots } = useStyles();
  const clearable = () => local.clearable ?? false;

  return (
    <Control>
      <TriggerBase
        {...rest}
        class={local.class}
        data-clearable={clearable() || undefined}
      >
        {local.children}

        <div class={slots.triggerActions()}>
          <SelectPrimitive.Indicator>
            <CaretUpDownIcon />
          </SelectPrimitive.Indicator>
        </div>
      </TriggerBase>
      <Show when={clearable()}>
        <ClearTrigger>
          <XIcon />
        </ClearTrigger>
      </Show>
    </Control>
  );
}

const SeparatorPart = withContext<SeparatorProps>(Separator, {
  defaultProps: { "data-scope": "select" },
  name: "Separator",
});

const ValueText = withContext<SelectValueTextProps>(SelectPrimitive.ValueText, {
  name: "ValueText",
});

const ContentBase = withContext<SelectContentProps>(SelectPrimitive.Content, {
  name: "Content",
});

function Content(props: SelectContentProps): JSX.Element {
  const [local, rest] = splitProps(props, ["class"]);

  return (
    <Portal>
      <SelectPrimitive.Positioner>
        <ContentBase {...rest} class={local.class} />
      </SelectPrimitive.Positioner>
    </Portal>
  );
}

function ItemGroup(props: SelectItemGroupProps): JSX.Element {
  const [local, rest] = splitProps(props, ["children", "heading"]);

  return (
    <SelectPrimitive.ItemGroup {...rest}>
      <Show when={local.heading !== undefined && local.heading !== false}>
        <ItemGroupLabel>{local.heading}</ItemGroupLabel>
      </Show>

      {local.children}
    </SelectPrimitive.ItemGroup>
  );
}

const ItemGroupLabel = withContext<SelectItemGroupLabelProps>(
  SelectPrimitive.ItemGroupLabel,
  { name: "ItemGroupLabel" },
);

const ItemBase = withContext<SelectItemProps>(SelectPrimitive.Item, {
  name: "Item",
});

function Item(props: SelectItemProps): JSX.Element {
  const [local, rest] = splitProps(props, ["children", "class"]);
  const { slots } = useStyles();

  return (
    <ItemBase {...rest} class={local.class}>
      <SelectPrimitive.ItemText class={slots.itemText()}>
        {local.children}
      </SelectPrimitive.ItemText>

      <span class={slots.itemIndicator()}>
        <SelectPrimitive.ItemIndicator>
          <CheckIcon />
        </SelectPrimitive.ItemIndicator>
      </span>
    </ItemBase>
  );
}

const ClearTriggerBase = withContext<SelectClearTriggerProps>(
  SelectPrimitive.ClearTrigger,
  { name: "ClearTrigger" },
);

function ClearTrigger(props: SelectClearTriggerProps): JSX.Element {
  const { m } = useLocale();
  const [local, rest] = splitProps(props, ["class"]);

  return (
    <ClearTriggerBase
      aria-label={m("select.clear")}
      class={local.class}
      {...rest}
    />
  );
}

const EmptyBase = withContext<SelectEmptyProps>("div", {
  defaultProps: { role: "presentation" },
  name: "Empty",
});

function Empty(props: SelectEmptyProps): JSX.Element {
  const [local, rest] = splitProps(props, ["class"]);
  const select = useSelectContext();

  return (
    <Show when={select().empty}>
      <EmptyBase {...rest} class={local.class} />
    </Show>
  );
}
// #endregion

// #region Shorthand
function SelectShorthand(props: SelectProps): JSX.Element {
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
    <Root {...rest} collection={collection()}>
      <Trigger clearable={local.clearable ?? false}>
        <ValueText placeholder={local.placeholder} />
      </Trigger>
      <Content>
        <For each={normalized()}>
          {(item) => <Item item={item}>{item.label}</Item>}
        </For>
      </Content>
    </Root>
  );
}
// #endregion

export type {
  SelectClearTriggerProps,
  SelectContentProps,
  SelectItemGroupLabelProps,
  SelectItemProps,
  SelectValueTextProps,
} from "@ark-ui/solid";

export const Select = Object.assign(SelectShorthand, {
  ClearTrigger,
  Content,
  Context: SelectContext,
  Empty,
  Item,
  ItemGroup,
  ItemGroupLabel,
  Root,
  Separator: SeparatorPart,
  Trigger,
  ValueText,
});
