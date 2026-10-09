import {
  type CollectionItem,
  createListCollection,
} from "@ark-ui/solid/collection";
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
import type {
  ListboxItemProps as BaseListboxItemProps,
  ListboxProps as BaseListboxRootProps,
} from "@pisagor/props";
import { listboxItemRecipe, listboxRecipe } from "@pisagor/recipes";
import type { Component, JSX } from "solid-js";
import { createMemo, For, Show, splitProps } from "solid-js";
import { createSlotRecipeContext } from "../internal/create-slot-recipe-context";
import { CheckIcon } from "../internal/icons";
import { DropdownMenu, type DropdownMenuShortcutProps } from "./dropdown-menu";

// #region Context
const {
  Context: ListboxStylesContext,
  useStyles: useListbox,
  withContext: withListboxContext,
} = createSlotRecipeContext({ name: "Listbox", recipe: listboxRecipe });

const { Context: ListboxItemStylesContext, useStyles: useListboxItem } =
  createSlotRecipeContext({ name: "Listbox", recipe: listboxItemRecipe });
// #endregion

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
  heading?: string;
}

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

export const ListboxContent: Component<ListboxContentProps> =
  withListboxContext(ListboxPrimitive.Content, { name: "Content" });

export function ListboxItem(props: ListboxItemProps): JSX.Element {
  const [local, rest] = splitProps(props, ["variant", "recipe", "class"]);
  const variant = () => local.variant ?? "default";
  const slots = createMemo(() =>
    (local.recipe ?? listboxItemRecipe)({ variant: variant() }),
  );

  return (
    <ListboxItemStylesContext
      value={{
        get slots() {
          return slots();
        },
        get variants() {
          return { variant: variant() };
        },
      }}
    >
      <ListboxPrimitive.Item
        {...rest}
        class={slots().base({ class: local.class })}
        data-variant={variant()}
      />
    </ListboxItemStylesContext>
  );
}

export function ListboxItemText(props: ListboxItemTextProps): JSX.Element {
  const [local, rest] = splitProps(props, ["class"]);
  const styles = useListboxItem();

  return (
    <ListboxPrimitive.ItemText
      {...rest}
      class={styles.slots.text({ class: local.class })}
    />
  );
}

export function ListboxItemGroup(props: ListboxItemGroupProps): JSX.Element {
  const [local, rest] = splitProps(props, ["children", "heading", "class"]);
  const styles = useListbox();

  return (
    <ListboxPrimitive.ItemGroup
      {...rest}
      class={styles.slots.itemGroup({ class: local.class })}
    >
      <Show when={!!local.heading}>
        <ListboxItemGroupLabel>{local.heading}</ListboxItemGroupLabel>
      </Show>
      {local.children}
    </ListboxPrimitive.ItemGroup>
  );
}

export function ListboxItemGroupLabel(
  props: ListboxItemGroupLabelProps,
): JSX.Element {
  const [local, rest] = splitProps(props, ["class"]);
  const styles = useListbox();

  return (
    <ListboxPrimitive.ItemGroupLabel
      {...rest}
      class={styles.slots.itemGroupLabel({ class: local.class })}
    />
  );
}

export function ListboxValueText(props: ListboxValueTextProps): JSX.Element {
  const [local, rest] = splitProps(props, ["class"]);
  const styles = useListbox();

  return (
    <ListboxPrimitive.ValueText
      {...rest}
      class={styles.slots.valueText({ class: local.class })}
    />
  );
}

export function ListboxItemIndicator(
  props: ListboxItemIndicatorProps,
): JSX.Element {
  const [local, rest] = splitProps(props, ["children", "class"]);
  const styles = useListboxItem();
  return (
    <ListboxPrimitive.ItemIndicator
      {...rest}
      class={styles.slots.indicator({ class: local.class })}
    >
      {local.children ?? <CheckIcon />}
    </ListboxPrimitive.ItemIndicator>
  );
}

export function ListboxEmpty(props: ListboxEmptyProps): JSX.Element {
  const [local, rest] = splitProps(props, ["class"]);
  const styles = useListbox();

  return (
    <ListboxPrimitive.Empty
      {...rest}
      class={styles.slots.empty({ class: local.class })}
    />
  );
}

export function ListboxShortcut(props: DropdownMenuShortcutProps): JSX.Element {
  return (
    <DropdownMenu.Shortcut
      {...props}
      data-part="shortcut"
      data-scope="listbox"
    />
  );
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

export { createListCollection } from "@ark-ui/solid/collection";
export type {
  ListboxContentProps,
  ListboxEmptyProps,
  ListboxItemGroupLabelProps,
  ListboxItemIndicatorProps,
  ListboxItemTextProps,
  ListboxValueTextProps,
} from "@ark-ui/solid/listbox";

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
