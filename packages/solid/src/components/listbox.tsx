import {
  Listbox as ListboxPrimitive,
  createListCollection,
} from "@ark-ui/solid";
import type {
  CollectionItem,
  ListboxContentProps,
  ListboxEmptyProps,
  ListboxItemGroupLabelProps,
  ListboxItemGroupProps as ListboxItemGroupPrimitiveProps,
  ListboxItemIndicatorProps,
  ListboxItemProps as ListboxItemPrimitiveProps,
  ListboxItemTextProps,
  ListboxRootProps as ListboxRootPrimitiveProps,
  ListboxValueTextProps,
} from "@ark-ui/solid";
import type {
  ListboxItemRootContract,
  ListboxItemContract,
  ListboxPresetItem as BaseListboxPresetItem,
  ListboxRootContract,
  ListboxContract,
} from "@pisagor/contracts";
import {
  dropdownMenuRecipe,
  listboxItemRecipe,
  listboxRecipe,
} from "@pisagor/recipes";
import type { JSX } from "solid-js";
import { createMemo, For, splitProps } from "solid-js";
import { createSlotRecipeContext } from "../internal";
import type { DropdownMenuShortcutProps } from "./dropdown-menu";
import { useLocale } from "./provider/context";

// #region Context
const { Context: ListboxStylesContext, withContext: withListboxContext } =
  createSlotRecipeContext({
    name: "Listbox",
    recipe: listboxRecipe,
  });

const {
  withContext: withListboxItemContext,
  withProvider: withListboxItemProvider,
} = createSlotRecipeContext({
  name: "Listbox",
  recipe: listboxItemRecipe,
});
// #endregion

// #region Types
interface ListboxPresetItem
  extends CollectionItem, Omit<BaseListboxPresetItem, "label"> {
  label: string;
}

export type ListboxRootProps<T extends CollectionItem = CollectionItem> = Omit<
  ListboxRootPrimitiveProps<T>,
  "onValueChange"
> & {
  onValueChange?: (value: string | string[]) => void;
} & Omit<ListboxRootContract, "emptyText" | "items">;

export interface ListboxProps
  extends Omit<ListboxRootProps, "children" | "collection">, ListboxContract {
  collection?: ListboxRootProps["collection"];
  emptyText?: JSX.Element;
  items?: ListboxPresetItem[];
}

export type ListboxItemProps = ListboxItemPrimitiveProps &
  ListboxItemRootContract &
  ListboxItemContract;

// #endregion

// #region Parts
export function ListboxRoot<T extends CollectionItem = CollectionItem>(
  props: ListboxRootProps<T>,
): JSX.Element {
  const [local, rest] = splitProps(props as ListboxRootProps, [
    "onValueChange",
    "recipe",
    "class",
  ]);

  const slots = createMemo(() => (local.recipe ?? listboxRecipe)());

  return (
    <ListboxStylesContext
      value={{
        get slots() {
          return slots();
        },
        variants: {},
      }}
    >
      <ListboxPrimitive.Root
        {...rest}
        class={slots().base({ class: local.class })}
        onValueChange={
          local.onValueChange
            ? (details) => local.onValueChange?.(details.value)
            : undefined
        }
      />
    </ListboxStylesContext>
  );
}

export const ListboxContent = withListboxContext<ListboxContentProps>(
  ListboxPrimitive.Content,
  { name: "Content" },
);

export const ListboxItem = withListboxItemProvider<ListboxItemProps>(
  ListboxPrimitive.Item,
  { name: "Item", slot: "base" },
);

export const ListboxItemText = withListboxItemContext<ListboxItemTextProps>(
  ListboxPrimitive.ItemText,
  { name: "ItemText", slot: "text" },
);

export const ListboxItemGroup =
  withListboxContext<ListboxItemGroupPrimitiveProps>(
    ListboxPrimitive.ItemGroup,
    { name: "ItemGroup" },
  );

export const ListboxItemGroupLabel =
  withListboxContext<ListboxItemGroupLabelProps>(
    ListboxPrimitive.ItemGroupLabel,
    { name: "ItemGroupLabel" },
  );

export const ListboxValueText = withListboxContext<ListboxValueTextProps>(
  ListboxPrimitive.ValueText,
  { name: "ValueText" },
);

/** Selected-item indicator; render your own icon inside. */
export const ListboxItemIndicator =
  withListboxItemContext<ListboxItemIndicatorProps>(
    ListboxPrimitive.ItemIndicator,
    { name: "ItemIndicator", slot: "indicator" },
  );

const ListboxEmptyBase = withListboxContext<ListboxEmptyProps>(
  ListboxPrimitive.Empty,
  { name: "Empty" },
);

/** Empty state with localized default text. */
export function ListboxEmpty(props: ListboxEmptyProps): JSX.Element {
  const { m } = useLocale();
  const [local, rest] = splitProps(props, ["children"]);

  return (
    <ListboxEmptyBase {...rest}>
      {local.children || m("listbox.empty")}
    </ListboxEmptyBase>
  );
}

export function ListboxShortcut(props: DropdownMenuShortcutProps): JSX.Element {
  const [local, rest] = splitProps(props, ["class"]);

  return (
    <span
      {...rest}
      class={dropdownMenuRecipe().shortcut({ class: local.class })}
      data-part="shortcut"
      data-scope="listbox"
    />
  );
}

// #endregion

// #region Shorthand
export function ListboxShorthand(props: ListboxProps): JSX.Element {
  const [local, rest] = splitProps(props, ["collection", "items", "emptyText"]);
  const items = createMemo(() => local.items ?? []);
  const collection = createMemo(
    () =>
      local.collection ??
      createListCollection({
        items: items(),
        itemToString: (item) => item.label,
        itemToValue: (item) => item.value,
      }),
  );

  return (
    <ListboxRoot {...rest} collection={collection()}>
      <ListboxContent>
        <ListboxEmpty>{local.emptyText}</ListboxEmpty>
        <For each={items()}>
          {(item) => (
            <ListboxItem item={item}>
              <ListboxItemText>{item.label}</ListboxItemText>
            </ListboxItem>
          )}
        </For>
      </ListboxContent>
    </ListboxRoot>
  );
}
// #endregion

export {
  type ListboxContentProps,
  type ListboxEmptyProps,
  type ListboxItemGroupProps,
  type ListboxItemGroupLabelProps,
  type ListboxItemIndicatorProps,
  type ListboxItemTextProps,
  type ListboxValueTextProps,
  createListCollection,
} from "@ark-ui/solid";

export const Listbox = Object.assign(ListboxShorthand, {
  Content: ListboxContent,
  Empty: ListboxEmpty,
  Item: ListboxItem,
  ItemGroup: ListboxItemGroup,
  ItemGroupLabel: ListboxItemGroupLabel,
  ItemIndicator: ListboxItemIndicator,
  ItemText: ListboxItemText,
  Root: ListboxRoot,
  Shortcut: ListboxShortcut,
  ValueText: ListboxValueText,
});
