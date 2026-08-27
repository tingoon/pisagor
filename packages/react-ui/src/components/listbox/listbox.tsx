import { type CollectionItem, createListCollection } from "@ark-ui/react/collection";
import {
  Listbox as ListboxPrimitive,
  type ListboxRootProps as ListboxRootPropsPrimitive,
} from "@ark-ui/react/listbox";
import { CheckIcon } from "@phosphor-icons/react";
import {
  type ListboxItemVariantProps,
  listboxItemVariants,
  listboxVariants,
} from "@pisagor/recipes/listbox";
import type { ComponentProps } from "react";
import { useMemo } from "react";
import { DropdownMenu, type DropdownMenuShortcutProps } from "../dropdown-menu";
import { ListboxContext, ListboxItemContext, useListbox, useListboxItem } from "./listbox.context";

// #region Types
interface ListboxPresetItem {
  label: string;
  value: string;
  disabled?: boolean;
}

export interface ListboxRootProps<T extends CollectionItem = CollectionItem>
  extends Omit<ListboxRootPropsPrimitive<T>, "onValueChange"> {
  onValueChange?: (value: string | string[]) => void;
}

export interface ListboxProps extends Omit<ListboxRootProps, "children" | "collection"> {
  items?: ListboxPresetItem[];
  collection?: ListboxRootProps["collection"];
}

export interface ListboxItemProps
  extends ComponentProps<typeof ListboxPrimitive.Item>,
    ListboxItemVariantProps {}

export interface ListboxItemGroupProps extends ComponentProps<typeof ListboxPrimitive.ItemGroup> {
  /** The heading of the listbox item group. */
  heading?: string;
}

export type ListboxContentProps = ComponentProps<typeof ListboxPrimitive.Content>;

export type ListboxItemTextProps = ComponentProps<typeof ListboxPrimitive.ItemText>;

export type ListboxItemGroupLabelProps = ComponentProps<typeof ListboxPrimitive.ItemGroupLabel>;

export type ListboxValueTextProps = ComponentProps<typeof ListboxPrimitive.ValueText>;

export type ListboxItemIndicatorProps = ComponentProps<typeof ListboxPrimitive.ItemIndicator>;

export type ListboxEmptyProps = ComponentProps<typeof ListboxPrimitive.Empty>;
// #endregion

// #region Parts
export function ListboxRoot<T extends CollectionItem = CollectionItem>({
  className,
  children,
  onValueChange,
  ...rest
}: ListboxRootProps<T>) {
  const slots = useMemo(() => listboxVariants(), []);

  return (
    <ListboxContext value={{ slots }}>
      <ListboxPrimitive.Root
        {...rest}
        className={slots.base({ className })}
        onValueChange={onValueChange ? (details) => onValueChange(details.value) : undefined}
      >
        {children}
      </ListboxPrimitive.Root>
    </ListboxContext>
  );
}

export function ListboxContent({ className, ...rest }: ListboxContentProps) {
  const { slots } = useListbox();

  return <ListboxPrimitive.Content {...rest} className={slots.content({ className })} />;
}

export function ListboxItem({
  variant = "default",
  className,
  children,
  ...rest
}: ListboxItemProps) {
  const slots = useMemo(() => listboxItemVariants({ variant }), [variant]);

  return (
    <ListboxItemContext value={{ slots }}>
      <ListboxPrimitive.Item {...rest} className={slots.base({ className })} data-variant={variant}>
        {children}
      </ListboxPrimitive.Item>
    </ListboxItemContext>
  );
}

export function ListboxItemText({ className, ...rest }: ListboxItemTextProps) {
  const { slots } = useListboxItem();

  return <ListboxPrimitive.ItemText {...rest} className={slots.text({ className })} />;
}

export function ListboxItemGroup({ heading, className, children, ...rest }: ListboxItemGroupProps) {
  const { slots } = useListbox();

  return (
    <ListboxPrimitive.ItemGroup {...rest} className={slots.itemGroup({ className })}>
      {!!heading && <ListboxItemGroupLabel>{heading}</ListboxItemGroupLabel>}
      {children}
    </ListboxPrimitive.ItemGroup>
  );
}

export function ListboxItemGroupLabel({ className, ...rest }: ListboxItemGroupLabelProps) {
  const { slots } = useListbox();

  return (
    <ListboxPrimitive.ItemGroupLabel {...rest} className={slots.itemGroupLabel({ className })} />
  );
}

export function ListboxValueText({ className, ...rest }: ListboxValueTextProps) {
  const { slots } = useListbox();

  return <ListboxPrimitive.ValueText {...rest} className={slots.valueText({ className })} />;
}

export function ListboxItemIndicator({ className, children, ...rest }: ListboxItemIndicatorProps) {
  const { slots } = useListboxItem();

  return (
    <ListboxPrimitive.ItemIndicator {...rest} className={slots.indicator({ className })}>
      {children ?? <CheckIcon />}
    </ListboxPrimitive.ItemIndicator>
  );
}

export function ListboxEmpty({ className, ...rest }: ListboxEmptyProps) {
  const { slots } = useListbox();

  return <ListboxPrimitive.Empty {...rest} className={slots.empty({ className })} />;
}

export function ListboxShortcut(props: DropdownMenuShortcutProps) {
  return <DropdownMenu.Shortcut data-part="shortcut" data-scope="listbox" {...props} />;
}
// #endregion

// #region Shorthand
export function ListboxShorthand({
  items = [],
  collection: collectionProp,
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
