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
import { CheckIcon } from "@phosphor-icons/react";
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

import { type ReactNode, useMemo } from "react";
import { createSlotRecipeContext } from "../internal";
import type { DropdownMenuShortcutProps } from "./dropdown-menu";
import { useLocale } from "./provider/context";

// #region Context
const {
  Context: ListboxStylesContext,
  useStyles: useListbox,
  withContext: withListboxContext,
} = createSlotRecipeContext({
  name: "Listbox",
  recipe: listboxRecipe,
});

const { Context: ListboxItemStylesContext, useStyles: useListboxItem } =
  createSlotRecipeContext({
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

export function ListboxItem({
  variant = "default",
  children,
  recipe = listboxItemRecipe,
  className,
  ...rest
}: ListboxItemProps) {
  const slots = useMemo(() => recipe({ variant }), [variant, recipe]);

  return (
    <ListboxItemStylesContext value={{ slots, variants: { variant } as never }}>
      <ListboxPrimitive.Item
        {...rest}
        className={slots.base({ className })}
        data-variant={variant}
      >
        {children}
      </ListboxPrimitive.Item>
    </ListboxItemStylesContext>
  );
}

export function ListboxItemText({ className, ...rest }: ListboxItemTextProps) {
  const { slots } = useListboxItem();

  return (
    <ListboxPrimitive.ItemText
      {...rest}
      className={slots.text({ className })}
    />
  );
}

export const ListboxItemGroup =
  withListboxContext<ListboxItemGroupPrimitiveProps>(
    ListboxPrimitive.ItemGroup,
    { name: "ItemGroup" },
  );

export function ListboxItemGroupLabel({
  className,
  ...rest
}: ListboxItemGroupLabelProps) {
  const { slots } = useListbox();

  return (
    <ListboxPrimitive.ItemGroupLabel
      {...rest}
      className={slots.itemGroupLabel({ className })}
    />
  );
}

export function ListboxValueText({
  className,
  ...rest
}: ListboxValueTextProps) {
  const { slots } = useListbox();

  return (
    <ListboxPrimitive.ValueText
      {...rest}
      className={slots.valueText({ className })}
    />
  );
}

export function ListboxItemIndicator({
  children,
  className,
  ...rest
}: ListboxItemIndicatorProps) {
  const { slots } = useListboxItem();

  return (
    <ListboxPrimitive.ItemIndicator
      {...rest}
      className={slots.indicator({ className })}
    >
      {children ?? <CheckIcon />}
    </ListboxPrimitive.ItemIndicator>
  );
}

export function ListboxEmpty({
  children,
  className,
  ...rest
}: ListboxEmptyProps) {
  const { m } = useLocale();
  const { slots } = useListbox();

  return (
    <ListboxPrimitive.Empty {...rest} className={slots.empty({ className })}>
      {children || m("listbox.empty")}
    </ListboxPrimitive.Empty>
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
ListboxContent.displayName = "Listbox.Content";
ListboxItem.displayName = "Listbox.Item";
ListboxItemText.displayName = "Listbox.ItemText";
ListboxItemGroup.displayName = "Listbox.ItemGroup";
ListboxItemGroupLabel.displayName = "Listbox.ItemGroupLabel";
ListboxValueText.displayName = "Listbox.ValueText";
ListboxItemIndicator.displayName = "Listbox.ItemIndicator";
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
