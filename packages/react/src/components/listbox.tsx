import {
  type CollectionItem,
  createListCollection,
} from "@ark-ui/react/collection";
import type {
  ListboxEmptyProps,
  ListboxItemGroupLabelProps,
  ListboxItemIndicatorProps,
  ListboxItemTextProps,
  ListboxItemGroupProps as ListboxPrimitiveItemGroupProps,
  ListboxItemProps as ListboxPrimitiveItemProps,
  ListboxRootProps as ListboxPrimitiveRootProps,
  ListboxValueTextProps,
} from "@ark-ui/react/listbox";
import { Listbox as ListboxPrimitive } from "@ark-ui/react/listbox";
import { CheckIcon } from "@phosphor-icons/react";
import type {
  ListboxItemProps as BaseListboxItemProps,
  ListboxProps as BaseListboxRootProps,
} from "@pisagor/props";
import { listboxItemRecipe, listboxRecipe } from "@pisagor/recipes";

import { useMemo } from "react";
import { createSlotRecipeContext } from "../utils";
import { DropdownMenu, type DropdownMenuShortcutProps } from "./dropdown-menu";

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
interface ListboxPresetItem extends CollectionItem {
  label: string;
  value: string;
  disabled?: boolean;
}

export type ListboxRootProps<T extends CollectionItem = CollectionItem> = Omit<
  ListboxPrimitiveRootProps<T>,
  "onValueChange"
> & {
  onValueChange?: (value: string | string[]) => void;
} & BaseListboxRootProps;

export interface ListboxProps
  extends Omit<ListboxRootProps, "children" | "collection"> {
  collection?: ListboxRootProps["collection"];
  items?: ListboxPresetItem[];
}

export interface ListboxItemProps
  extends ListboxPrimitiveItemProps,
    BaseListboxItemProps {}

export interface ListboxItemGroupProps extends ListboxPrimitiveItemGroupProps {
  /** The heading of the listbox item group. */
  heading?: string;
}

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

export const ListboxContent = withListboxContext(ListboxPrimitive.Content, {
  name: "Content",
});

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

export function ListboxItemGroup({
  children,
  heading,
  className,
  ...rest
}: ListboxItemGroupProps) {
  const { slots } = useListbox();

  return (
    <ListboxPrimitive.ItemGroup
      {...rest}
      className={slots.itemGroup({ className })}
    >
      {!!heading && <ListboxItemGroupLabel>{heading}</ListboxItemGroupLabel>}
      {children}
    </ListboxPrimitive.ItemGroup>
  );
}

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

export function ListboxEmpty({ className, ...rest }: ListboxEmptyProps) {
  const { slots } = useListbox();

  return (
    <ListboxPrimitive.Empty {...rest} className={slots.empty({ className })} />
  );
}

export function ListboxShortcut(props: DropdownMenuShortcutProps) {
  return (
    <DropdownMenu.Shortcut
      {...props}
      data-part="shortcut"
      data-scope="listbox"
    />
  );
}
// #endregion

// #region Shorthand
export function ListboxShorthand({
  collection: collectionProp,
  items = [],
  ...rest
}: ListboxProps) {
  const collection =
    collectionProp ??
    createListCollection({
      items,
      itemToString: (item) => item.value,
      itemToValue: (item) => item.value,
    });

  return (
    <ListboxRoot {...rest} collection={collection}>
      {items.length > 0 && (
        <ListboxContent>
          {items.map((item) => (
            <ListboxItem item={item} key={item.value}>
              <ListboxItemText>{item.label}</ListboxItemText>
            </ListboxItem>
          ))}
        </ListboxContent>
      )}
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
ListboxShorthand.displayName = "Listbox";

// #endregion

export type {
  ListboxContentProps,
  ListboxEmptyProps,
  ListboxItemGroupLabelProps,
  ListboxItemIndicatorProps,
  ListboxItemTextProps,
  ListboxValueTextProps,
} from "@ark-ui/react/listbox";
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
