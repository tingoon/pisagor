import type { CollectionItem, ListCollection } from "@ark-ui/vue/collection";
import { createListCollection } from "@ark-ui/vue/collection";
import type { ListboxRootProps as ArkListboxRootProps } from "@ark-ui/vue/listbox";
import { Listbox as ListboxPrimitive } from "@ark-ui/vue/listbox";
import { PhCheck } from "@phosphor-icons/vue";
import {
  type ListboxItemVariantProps,
  listboxItemRecipe,
  listboxRecipe,
} from "@pisagor/recipes/listbox";
import { cn } from "@pisagor/utils";
import { defineComponent, h, type PropType } from "vue";
import { DropdownMenu } from "../dropdown-menu";

// #region Types
interface ListboxPresetItem {
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
};

export interface ListboxProps extends Omit<ListboxRootProps, "children"> {
  items?: ListboxPresetItem[];
}
// #endregion

// #region Parts
type ArkPart = Parameters<typeof h>[0];

export const ListboxRoot = defineComponent({
  inheritAttrs: false,
  name: "ListboxRoot",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
    collection: {
      default: undefined,
      type: Object as PropType<ListCollection<CollectionItem> | undefined>,
    },
    onValueChange: {
      default: undefined,
      type: Function as PropType<ListboxRootProps["onValueChange"]>,
    },
  },
  setup(props, { attrs, slots }) {
    return () => {
      const variantSlots = listboxRecipe();

      return h(
        ListboxPrimitive.Root as ArkPart,
        {
          ...attrs,
          class: variantSlots.base({ class: cn(props.class, attrs.class) }),
          collection: props.collection,
          onValueChange: props.onValueChange
            ? (details: { value: string | string[] }) => props.onValueChange?.(details.value)
            : undefined,
        },
        slots.default?.(),
      );
    };
  },
});
ListboxRoot.displayName = "Listbox.Root";

export const ListboxContent = defineComponent({
  inheritAttrs: false,
  name: "ListboxContent",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
  },
  setup(props, { attrs, slots }) {
    return () => {
      const variantSlots = listboxRecipe();

      return h(
        ListboxPrimitive.Content as ArkPart,
        {
          ...attrs,
          class: variantSlots.content({ class: cn(props.class, attrs.class) }),
        },
        slots.default?.(),
      );
    };
  },
});
ListboxContent.displayName = "Listbox.Content";

export const ListboxItem = defineComponent({
  inheritAttrs: false,
  name: "ListboxItem",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
    item: { default: undefined, type: Object as PropType<unknown> },
    variant: {
      default: "default",
      type: String as PropType<ListboxItemVariantProps["variant"]>,
    },
  },
  setup(props, { attrs, slots }) {
    return () => {
      const variantSlots = listboxItemRecipe({ variant: props.variant });

      return h(
        ListboxPrimitive.Item as ArkPart,
        {
          ...attrs,
          class: variantSlots.base({ class: cn(props.class, attrs.class) }),
          "data-variant": props.variant,
          item: props.item,
        },
        slots.default?.(),
      );
    };
  },
});
ListboxItem.displayName = "Listbox.Item";

export const ListboxItemText = defineComponent({
  inheritAttrs: false,
  name: "ListboxItemText",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
  },
  setup(props, { attrs, slots }) {
    return () => {
      const variantSlots = listboxItemRecipe();

      return h(
        ListboxPrimitive.ItemText as ArkPart,
        {
          ...attrs,
          class: variantSlots.text({ class: cn(props.class, attrs.class) }),
        },
        slots.default?.(),
      );
    };
  },
});
ListboxItemText.displayName = "Listbox.ItemText";

export const ListboxItemGroup = defineComponent({
  inheritAttrs: false,
  name: "ListboxItemGroup",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
    heading: { default: undefined, type: String as PropType<string | undefined> },
  },
  setup(props, { attrs, slots }) {
    return () => {
      const variantSlots = listboxRecipe();

      return h(
        ListboxPrimitive.ItemGroup as ArkPart,
        {
          ...attrs,
          class: variantSlots.itemGroup({ class: cn(props.class, attrs.class) }),
        },
        () => [
          props.heading ? h(ListboxItemGroupLabel, null, () => props.heading) : null,
          slots.default?.(),
        ],
      );
    };
  },
});
ListboxItemGroup.displayName = "Listbox.ItemGroup";

export const ListboxItemGroupLabel = defineComponent({
  inheritAttrs: false,
  name: "ListboxItemGroupLabel",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
  },
  setup(props, { attrs, slots }) {
    return () => {
      const variantSlots = listboxRecipe();

      return h(
        ListboxPrimitive.ItemGroupLabel as ArkPart,
        {
          ...attrs,
          class: variantSlots.itemGroupLabel({ class: cn(props.class, attrs.class) }),
        },
        slots.default?.(),
      );
    };
  },
});
ListboxItemGroupLabel.displayName = "Listbox.ItemGroupLabel";

export const ListboxValueText = defineComponent({
  inheritAttrs: false,
  name: "ListboxValueText",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
  },
  setup(props, { attrs, slots }) {
    return () => {
      const variantSlots = listboxRecipe();

      return h(
        ListboxPrimitive.ValueText as ArkPart,
        {
          ...attrs,
          class: variantSlots.valueText({ class: cn(props.class, attrs.class) }),
        },
        slots.default?.(),
      );
    };
  },
});
ListboxValueText.displayName = "Listbox.ValueText";

export const ListboxItemIndicator = defineComponent({
  inheritAttrs: false,
  name: "ListboxItemIndicator",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
  },
  setup(props, { attrs, slots }) {
    return () => {
      const variantSlots = listboxItemRecipe();

      return h(
        ListboxPrimitive.ItemIndicator as ArkPart,
        {
          ...attrs,
          class: variantSlots.indicator({ class: cn(props.class, attrs.class) }),
        },
        slots.default?.() ?? h(PhCheck, { "aria-hidden": true }),
      );
    };
  },
});
ListboxItemIndicator.displayName = "Listbox.ItemIndicator";

export const ListboxEmpty = defineComponent({
  inheritAttrs: false,
  name: "ListboxEmpty",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
  },
  setup(props, { attrs, slots }) {
    return () => {
      const variantSlots = listboxRecipe();

      return h(
        ListboxPrimitive.Empty as ArkPart,
        {
          ...attrs,
          class: variantSlots.empty({ class: cn(props.class, attrs.class) }),
        },
        slots.default?.(),
      );
    };
  },
});
ListboxEmpty.displayName = "Listbox.Empty";

export const ListboxShortcut = defineComponent({
  inheritAttrs: false,
  name: "ListboxShortcut",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
  },
  setup(props, { attrs, slots }) {
    return () =>
      h(
        DropdownMenu.Shortcut as ArkPart,
        {
          ...attrs,
          class: cn(props.class, attrs.class),
          dataPart: "shortcut",
          dataScope: "listbox",
        },
        slots.default?.(),
      );
  },
});
ListboxShortcut.displayName = "Listbox.Shortcut";

export const ListboxShorthand = defineComponent({
  inheritAttrs: false,
  name: "PisagorListbox",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
    collection: {
      default: undefined,
      type: Object as PropType<ListCollection<CollectionItem> | undefined>,
    },
    items: { default: undefined, type: Array as PropType<ListboxPresetItem[] | undefined> },
    onValueChange: {
      default: undefined,
      type: Function as PropType<ListboxRootProps["onValueChange"]>,
    },
  },
  setup(props, { attrs, slots }) {
    return () => {
      const items = props.items;

      const collection = items
        ? createListCollection({
            items,
            itemToString: (item) => (item as { value: string }).value,
            itemToValue: (item) => (item as { value: string }).value,
          })
        : props.collection;

      return h(
        ListboxRoot as ArkPart,
        {
          ...attrs,
          class: props.class,
          collection,
          onValueChange: props.onValueChange,
        },
        () =>
          items
            ? h(ListboxContent as ArkPart, null, () =>
                items.map((item) =>
                  h(
                    ListboxItem as ArkPart,
                    {
                      disabled: item.disabled,
                      item,
                      key: item.value,
                      value: item.value,
                    },
                    () => h(ListboxItemText as ArkPart, null, () => item.label),
                  ),
                ),
              )
            : slots.default?.(),
      );
    };
  },
});
ListboxShorthand.displayName = "Listbox";
// #endregion
