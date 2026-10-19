import { Listbox as ListboxPrimitive, createListCollection } from "@ark-ui/vue";
import type {
  CollectionItem,
  ListCollection,
  ListboxRootProps as ArkListboxRootProps,
} from "@ark-ui/vue";
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
import { defineComponent, h, type PropType } from "vue";
import { type ClassValue, createSlotRecipeContext } from "../internal";
import { useLocale } from "./provider/context";

// #region Context
const { withContext: withListboxContext, withProvider: withListboxProvider } =
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
interface ListboxPresetItem extends Omit<BaseListboxPresetItem, "label"> {
  label: string;
  value: string;
  disabled?: boolean;
}

export type ListboxRootProps<T extends CollectionItem = CollectionItem> = Omit<
  ArkListboxRootProps<T>,
  "collection" | "onValueChange"
> & {
  collection?: ListCollection<T>;
  onValueChange?: (value: string | string[]) => void;
} & Omit<ListboxRootContract, "emptyText" | "items">;

export interface ListboxProps
  extends Omit<ListboxRootProps, "children">, ListboxContract {
  emptyText?: string;
  items?: ListboxPresetItem[];
}

export interface ListboxItemProps
  extends ListboxItemRootContract, ListboxItemContract {
  class?: ClassValue;
}
// #endregion

// #region Parts
type ArkPart = Parameters<typeof h>[0];

const ListboxRootBase = withListboxProvider<ListboxRootContract>(
  ListboxPrimitive.Root,
  { name: "Root", slot: "base" },
);

/** Root; `onValueChange` receives the selected value(s) directly. */
export const ListboxRoot = defineComponent({
  inheritAttrs: false,
  name: "Listbox.Root",
  props: {
    onValueChange: {
      default: undefined,
      type: Function as PropType<ListboxRootProps["onValueChange"]>,
    },
  },
  setup(props, { attrs, slots }) {
    return () =>
      h(
        ListboxRootBase as ArkPart,
        {
          ...attrs,
          onValueChange: props.onValueChange
            ? (details: { value: string | string[] }) =>
                props.onValueChange?.(details.value)
            : undefined,
        },
        slots,
      );
  },
});

export const ListboxContent = withListboxContext(ListboxPrimitive.Content, {
  name: "Content",
});

export const ListboxItem = withListboxItemProvider<ListboxItemRootContract>(
  ListboxPrimitive.Item,
  { name: "Item", slot: "base" },
);

export const ListboxItemText = withListboxItemContext(
  ListboxPrimitive.ItemText,
  { name: "ItemText", slot: "text" },
);

export const ListboxItemGroup = withListboxContext(ListboxPrimitive.ItemGroup, {
  name: "ItemGroup",
});

export const ListboxItemGroupLabel = withListboxContext(
  ListboxPrimitive.ItemGroupLabel,
  { name: "ItemGroupLabel" },
);

export const ListboxValueText = withListboxContext(ListboxPrimitive.ValueText, {
  name: "ValueText",
});

/** Selected-item indicator; render your own icon inside. */
export const ListboxItemIndicator = withListboxItemContext(
  ListboxPrimitive.ItemIndicator,
  { name: "ItemIndicator", slot: "indicator" },
);

const ListboxEmptyBase = withListboxContext(ListboxPrimitive.Empty, {
  name: "Empty",
});

/** Empty state with localized default text. */
export const ListboxEmpty = defineComponent({
  inheritAttrs: false,
  name: "Listbox.Empty",
  setup(_, { attrs, slots }) {
    const { m } = useLocale();

    return () =>
      h(
        ListboxEmptyBase as ArkPart,
        attrs,
        () => slots.default?.() ?? m("listbox.empty"),
      );
  },
});

export const ListboxShortcut = defineComponent({
  inheritAttrs: false,
  name: "Listbox.Shortcut",
  props: {
    class: {
      default: undefined,
      type: [String, Object, Array] as PropType<ClassValue>,
    },
  },
  setup(props, { attrs, slots }) {
    return () =>
      h(
        "span",
        {
          ...attrs,
          class: dropdownMenuRecipe().shortcut({ class: props.class }),
          "data-part": "shortcut",
          "data-scope": "listbox",
        },
        slots.default?.(),
      );
  },
});
// #endregion

// #region Shorthand
export const ListboxShorthand = defineComponent({
  inheritAttrs: false,
  name: "Listbox",
  props: {
    class: {
      default: undefined,
      type: [String, Object, Array] as PropType<ClassValue>,
    },
    collection: {
      default: undefined,
      type: Object as PropType<ListCollection<CollectionItem> | undefined>,
    },
    /** Content shown when there are no items. */
    emptyText: { default: undefined, type: String },
    items: {
      default: undefined,
      type: Array as PropType<ListboxPresetItem[] | undefined>,
    },
    onValueChange: {
      default: undefined,
      type: Function as PropType<ListboxRootProps["onValueChange"]>,
    },
  },
  setup(props, { attrs }) {
    return () => {
      const items = props.items ?? [];
      const collection =
        props.collection ??
        createListCollection({
          items,
          itemToString: (item) => item.label,
          itemToValue: (item) => item.value,
        });

      return h(
        ListboxRoot as ArkPart,
        {
          ...attrs,
          class: props.class,
          collection,
          onValueChange: props.onValueChange,
        },
        () =>
          h(ListboxContent as ArkPart, null, () => [
            h(ListboxEmpty as ArkPart, null, () => props.emptyText),
            ...items.map((item) =>
              h(ListboxItem as ArkPart, { item, key: item.value }, () =>
                h(ListboxItemText as ArkPart, null, () => item.label),
              ),
            ),
          ]),
      );
    };
  },
});
// #endregion

export type {
  ListboxContentProps,
  ListboxEmptyProps,
  ListboxItemGroupLabelProps,
  ListboxItemGroupProps,
  ListboxItemIndicatorProps,
  ListboxItemTextProps,
  ListboxValueTextProps,
} from "@ark-ui/vue";
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
