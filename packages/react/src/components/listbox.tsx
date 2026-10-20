import {
  Listbox as ListboxPrimitive,
  createListCollection,
} from "@ark-ui/react";
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
} from "@ark-ui/react";
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

import type { ReactNode } from "react";
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
  emptyText?: ReactNode;
  items?: ListboxPresetItem[];
}

export type ListboxItemProps = ListboxItemPrimitiveProps &
  ListboxItemRootContract &
  ListboxItemContract;

// #endregion

// #region Parts
export function ListboxRoot<T extends CollectionItem = CollectionItem>({
  recipe = listboxRecipe,
  className,
  children,
  onValueChange,
  ...rest
}: ListboxRootProps<T>) {
  const slots = recipe();

  return (
    <ListboxStylesContext value={{ slots, variants: {} as never }}>
      <ListboxPrimitive.Root
        {...rest}
        className={slots.base({ className })}
        onValueChange={
          onValueChange ? (details) => onValueChange(details.value) : undefined
        }
      >
        {children}
      </ListboxPrimitive.Root>
    </ListboxStylesContext>
  );
}

export const ListboxContent = withListboxContext<ListboxContentProps>(
  ListboxPrimitive.Content,
  {
    name: "Content",
  },
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
export function ListboxEmpty({ children, ...rest }: ListboxEmptyProps) {
  const { m } = useLocale();

  return (
    <ListboxEmptyBase {...rest}>
      {children || m("listbox.empty")}
    </ListboxEmptyBase>
  );
}

export function ListboxShortcut({
  className,
  ...rest
}: DropdownMenuShortcutProps) {
  return (
    <span
      {...rest}
      className={dropdownMenuRecipe().shortcut({ className })}
      data-part="shortcut"
      data-scope="listbox"
    />
  );
}
// #endregion

// #region Shorthand
export function ListboxShorthand({
  collection: collectionProp,
  emptyText,
  items = [],
  ...rest
}: ListboxProps) {
  const collection =
    collectionProp ??
    createListCollection({
      items,
      itemToString: (item) => item.label,
      itemToValue: (item) => item.value,
    });

  return (
    <ListboxRoot {...rest} collection={collection}>
      <ListboxContent>
        <ListboxEmpty>{emptyText}</ListboxEmpty>
        {items.map((item) => (
          <ListboxItem item={item} key={item.value}>
            <ListboxItemText>{item.label}</ListboxItemText>
          </ListboxItem>
        ))}
      </ListboxContent>
    </ListboxRoot>
  );
}
// #endregion

// #region Display Names
ListboxRoot.displayName = "Listbox.Root";
ListboxEmpty.displayName = "Listbox.Empty";
ListboxShortcut.displayName = "Listbox.Shortcut";

// #endregion

export type {
  ListboxContentProps,
  ListboxEmptyProps,
  ListboxItemGroupProps,
  ListboxItemGroupLabelProps,
  ListboxItemIndicatorProps,
  ListboxItemTextProps,
  ListboxValueTextProps,
} from "@ark-ui/react";
export { createListCollection };

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
