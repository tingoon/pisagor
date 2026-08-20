import {
  type CollectionItem,
  createListCollection,
  type ListCollection,
} from "@ark-ui/react/collection";
import {
  Listbox as ListboxPrimitive,
  type ListboxRootProps as ListboxRootPropsPrimitive,
} from "@ark-ui/react/listbox";
import { CheckIcon } from "@phosphor-icons/react";
import {
  type ListboxItemVariantProps,
  listboxContentVariants,
  listboxEmptyVariants,
  listboxItemGroupLabelVariants,
  listboxItemGroupVariants,
  listboxItemIndicatorVariants,
  listboxItemTextVariants,
  listboxItemVariants,
  listboxValueTextVariants,
  listboxVariants,
} from "@pisagor/styles/ui/listbox";
import { cn } from "@pisagor/utils";
import type { ComponentProps } from "react";
import type { WithTestId } from "../../internal/types";
import { DropdownMenu, type DropdownMenuShortcutProps } from "../dropdown-menu";

// #region Variants

// #endregion

// #region Types
interface ListboxPresetItem {
  label: string;
  value: string;
  disabled?: boolean;
}

interface ListboxRootProps<T extends CollectionItem = CollectionItem>
  extends Omit<ListboxRootPropsPrimitive<T>, "collection" | "onValueChange">,
    WithTestId {
  collection?: ListCollection<T>;
  onValueChange?: (value: string | string[]) => void;
}

export interface ListboxProps extends Omit<ListboxRootProps, "children"> {
  items?: ListboxPresetItem[];
}

interface ListboxItemProps
  extends ComponentProps<typeof ListboxPrimitive.Item>,
    ListboxItemVariantProps {}

interface ListboxItemGroupProps extends ComponentProps<typeof ListboxPrimitive.ItemGroup> {
  /** The heading of the listbox item group. */
  heading?: string;
}

// #endregion

// #region Components
export function ListboxRoot<T extends CollectionItem = CollectionItem>({
  className,
  collection: collectionProp,
  children,
  onValueChange,
  testId,
  ...rest
}: ListboxRootProps<T>) {
  return (
    <ListboxPrimitive.Root
      {...rest}
      className={cn(listboxVariants(), className)}
      collection={collectionProp as ListCollection<T>}
      data-testid={testId}
      onValueChange={onValueChange ? (details) => onValueChange(details.value) : undefined}
    >
      {children}
    </ListboxPrimitive.Root>
  );
}
ListboxRoot.displayName = "Listbox.Root";

export function ListboxContent({
  className,
  ...rest
}: ComponentProps<typeof ListboxPrimitive.Content>) {
  return <ListboxPrimitive.Content {...rest} className={cn(listboxContentVariants(), className)} />;
}
ListboxContent.displayName = "Listbox.Content";

export function ListboxItem({ variant = "default", className, ...rest }: ListboxItemProps) {
  return (
    <ListboxPrimitive.Item
      {...rest}
      className={cn(listboxItemVariants({ variant }), className)}
      data-variant={variant}
    />
  );
}
ListboxItem.displayName = "Listbox.Item";

export function ListboxItemText({
  className,
  ...rest
}: ComponentProps<typeof ListboxPrimitive.ItemText>) {
  return (
    <ListboxPrimitive.ItemText {...rest} className={cn(listboxItemTextVariants(), className)} />
  );
}
ListboxItemText.displayName = "Listbox.ItemText";

export function ListboxItemGroup({ heading, className, children, ...rest }: ListboxItemGroupProps) {
  return (
    <ListboxPrimitive.ItemGroup {...rest} className={cn(listboxItemGroupVariants(), className)}>
      {!!heading && <ListboxItemGroupLabel>{heading}</ListboxItemGroupLabel>}
      {children}
    </ListboxPrimitive.ItemGroup>
  );
}
ListboxItemGroup.displayName = "Listbox.ItemGroup";

export function ListboxItemGroupLabel({
  className,
  ...rest
}: ComponentProps<typeof ListboxPrimitive.ItemGroupLabel>) {
  return (
    <ListboxPrimitive.ItemGroupLabel
      {...rest}
      className={cn(listboxItemGroupLabelVariants(), className)}
    />
  );
}
ListboxItemGroupLabel.displayName = "Listbox.ItemGroupLabel";

export function ListboxValueText({
  className,
  ...rest
}: ComponentProps<typeof ListboxPrimitive.ValueText>) {
  return (
    <ListboxPrimitive.ValueText {...rest} className={cn(listboxValueTextVariants(), className)} />
  );
}
ListboxValueText.displayName = "Listbox.ValueText";

export function ListboxItemIndicator({
  className,
  children,
  ...rest
}: ComponentProps<typeof ListboxPrimitive.ItemIndicator>) {
  return (
    <ListboxPrimitive.ItemIndicator
      {...rest}
      className={cn(listboxItemIndicatorVariants(), className)}
    >
      {children ?? <CheckIcon />}
    </ListboxPrimitive.ItemIndicator>
  );
}
ListboxItemIndicator.displayName = "Listbox.ItemIndicator";

export function ListboxEmpty({
  className,
  ...rest
}: ComponentProps<typeof ListboxPrimitive.Empty>) {
  return <ListboxPrimitive.Empty {...rest} className={cn(listboxEmptyVariants(), className)} />;
}
ListboxEmpty.displayName = "Listbox.Empty";

export function ListboxShortcut(props: DropdownMenuShortcutProps) {
  return <DropdownMenu.Shortcut dataPart="shortcut" dataScope="listbox" {...props} />;
}
ListboxShortcut.displayName = "Listbox.Shortcut";

// #endregion

// #region Shorthand
export function ListboxShorthand({ items, collection: collectionProp, ...rest }: ListboxProps) {
  const collection = items
    ? createListCollection({
        items,
        itemToString: (item) => item.value,
        itemToValue: (item) => item.value,
      })
    : collectionProp;

  return (
    <ListboxRoot {...rest} collection={collection}>
      {items && (
        <ListboxContent>
          {items.map((item) => (
            <ListboxItem item={item as unknown as CollectionItem} key={item.value}>
              <ListboxItemText>{item.label}</ListboxItemText>
            </ListboxItem>
          ))}
        </ListboxContent>
      )}
    </ListboxRoot>
  );
}
ListboxShorthand.displayName = "Listbox";

// #endregion
