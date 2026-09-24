import { type CollectionItem, createListCollection } from "@ark-ui/solid/collection";
import type {
  ListboxContentProps,
  ListboxEmptyProps,
  ListboxItemGroupLabelProps,
  ListboxItemIndicatorProps,
  ListboxItemTextProps,
  ListboxItemGroupProps as ListboxPrimitiveItemGroupProps,
  ListboxItemProps as ListboxPrimitiveItemProps,
  ListboxRootProps as ListboxPrimitiveRootProps,
  ListboxValueTextProps,
} from "@ark-ui/solid/listbox";
import { Listbox as ListboxPrimitive } from "@ark-ui/solid/listbox";
import {
  type ListboxItemVariantProps,
  listboxItemRecipe,
  listboxRecipe,
} from "@pisagor/recipes/listbox";
import { cn } from "@pisagor/utils";
import type { JSX } from "solid-js";
import { createMemo, For, Show, splitProps } from "solid-js";
import { CheckIcon } from "../../internal/icons";
import { DropdownMenu, type DropdownMenuShortcutProps } from "../dropdown-menu";
import { ListboxContext, ListboxItemContext, useListbox, useListboxItem } from "./listbox.context";

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
  recipe?: typeof listboxRecipe;
};

export interface ListboxProps extends Omit<ListboxRootProps, "children" | "collection"> {
  collection?: ListboxRootProps["collection"];
  items?: ListboxPresetItem[];
}

export interface ListboxItemProps extends ListboxPrimitiveItemProps, ListboxItemVariantProps {
  itemRecipe?: typeof listboxItemRecipe;
}

export interface ListboxItemGroupProps extends ListboxPrimitiveItemGroupProps {
  heading?: string;
}

export function ListboxRoot<T extends CollectionItem = CollectionItem>(
  props: ListboxRootProps<T>,
): JSX.Element {
  const [local, rest] = splitProps(props as ListboxRootProps, [
    "recipe",
    "class",
    "children",
    "onValueChange",
  ]);
  const slots = () => (local.recipe ?? listboxRecipe)();

  return (
    <ListboxContext value={{ slots: slots() }}>
      <ListboxPrimitive.Root
        {...rest}
        class={slots().base({ class: cn(local.class) })}
        onValueChange={
          local.onValueChange ? (details) => local.onValueChange?.(details.value) : undefined
        }
      >
        {local.children}
      </ListboxPrimitive.Root>
    </ListboxContext>
  );
}

export function ListboxContent(props: ListboxContentProps): JSX.Element {
  const [local, rest] = splitProps(props, ["class"]);
  const { slots } = useListbox();
  return <ListboxPrimitive.Content {...rest} class={slots.content({ class: local.class })} />;
}

export function ListboxItem(props: ListboxItemProps): JSX.Element {
  const [local, rest] = splitProps(props, ["variant", "children", "itemRecipe", "class"]);
  const variant = () => local.variant ?? "default";
  const slots = createMemo(() => (local.itemRecipe ?? listboxItemRecipe)({ variant: variant() }));

  return (
    <ListboxItemContext value={{ slots: slots() }}>
      <ListboxPrimitive.Item
        {...rest}
        class={slots().base({ class: local.class })}
        data-variant={variant()}
      >
        {local.children}
      </ListboxPrimitive.Item>
    </ListboxItemContext>
  );
}

export function ListboxItemText(props: ListboxItemTextProps): JSX.Element {
  const [local, rest] = splitProps(props, ["class"]);
  const { slots } = useListboxItem();
  return <ListboxPrimitive.ItemText {...rest} class={slots.text({ class: local.class })} />;
}

export function ListboxItemGroup(props: ListboxItemGroupProps): JSX.Element {
  const [local, rest] = splitProps(props, ["children", "heading", "class"]);
  const { slots } = useListbox();

  return (
    <ListboxPrimitive.ItemGroup {...rest} class={slots.itemGroup({ class: local.class })}>
      <Show when={!!local.heading}>
        <ListboxItemGroupLabel>{local.heading}</ListboxItemGroupLabel>
      </Show>
      {local.children}
    </ListboxPrimitive.ItemGroup>
  );
}

export function ListboxItemGroupLabel(props: ListboxItemGroupLabelProps): JSX.Element {
  const [local, rest] = splitProps(props, ["class"]);
  const { slots } = useListbox();
  return (
    <ListboxPrimitive.ItemGroupLabel
      {...rest}
      class={slots.itemGroupLabel({ class: local.class })}
    />
  );
}

export function ListboxValueText(props: ListboxValueTextProps): JSX.Element {
  const [local, rest] = splitProps(props, ["class"]);
  const { slots } = useListbox();
  return <ListboxPrimitive.ValueText {...rest} class={slots.valueText({ class: local.class })} />;
}

export function ListboxItemIndicator(props: ListboxItemIndicatorProps): JSX.Element {
  const [local, rest] = splitProps(props, ["children", "class"]);
  const { slots } = useListboxItem();
  return (
    <ListboxPrimitive.ItemIndicator {...rest} class={slots.indicator({ class: local.class })}>
      {local.children ?? <CheckIcon />}
    </ListboxPrimitive.ItemIndicator>
  );
}

export function ListboxEmpty(props: ListboxEmptyProps): JSX.Element {
  const [local, rest] = splitProps(props, ["class"]);
  const { slots } = useListbox();
  return <ListboxPrimitive.Empty {...rest} class={slots.empty({ class: local.class })} />;
}

export function ListboxShortcut(props: DropdownMenuShortcutProps): JSX.Element {
  return <DropdownMenu.Shortcut {...props} data-part="shortcut" data-scope="listbox" />;
}

export function ListboxShorthand(props: ListboxProps): JSX.Element {
  const [local, rest] = splitProps(props, ["collection", "items"]);
  const items = createMemo(() => local.items ?? []);
  const collection = createMemo(
    () =>
      local.collection ??
      createListCollection({
        items: items(),
        itemToString: (item) => item.value,
        itemToValue: (item) => item.value,
      }),
  );

  return (
    <ListboxRoot {...rest} collection={collection()}>
      <Show when={items().length > 0}>
        <ListboxContent>
          <For each={items()}>
            {(item) => (
              <ListboxItem item={item}>
                <ListboxItemText>{item.label}</ListboxItemText>
              </ListboxItem>
            )}
          </For>
        </ListboxContent>
      </Show>
    </ListboxRoot>
  );
}
