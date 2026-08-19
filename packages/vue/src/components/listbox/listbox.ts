import type { CollectionItem, ListCollection } from "@ark-ui/vue/collection";
import { createListCollection } from "@ark-ui/vue/collection";
import type { ListboxRootProps as ArkListboxRootProps } from "@ark-ui/vue/listbox";
import { Listbox as ListboxPrimitive } from "@ark-ui/vue/listbox";
import { PhCheck } from "@phosphor-icons/vue";
import {
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
import type { VariantProps } from "tailwind-variants";
import { defineComponent, h, type PropType } from "vue";
import type { WithTestId } from "../../internal/types";
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
} & WithTestId;

export interface ListboxProps extends Omit<ListboxRootProps, "children"> {
  items?: ListboxPresetItem[];
}

type ListboxItemVariantProps = VariantProps<typeof listboxItemVariants>;
// #endregion

// #region Components
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
    testId: String,
  },
  setup(props, { attrs, slots }) {
    return () =>
      h(
        ListboxPrimitive.Root as ArkPart,
        {
          ...attrs,
          class: cn(listboxVariants(), props.class, attrs.class),
          collection: props.collection,
          "data-testid": props.testId,
          onValueChange: props.onValueChange
            ? (details: { value: string | string[] }) => props.onValueChange?.(details.value)
            : undefined,
        },
        slots.default?.(),
      );
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
    return () =>
      h(
        ListboxPrimitive.Content as ArkPart,
        {
          ...attrs,
          class: cn(listboxContentVariants(), props.class, attrs.class),
        },
        slots.default?.(),
      );
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
    return () =>
      h(
        ListboxPrimitive.Item as ArkPart,
        {
          ...attrs,
          class: cn(listboxItemVariants({ variant: props.variant }), props.class, attrs.class),
          "data-variant": props.variant,
          item: props.item,
        },
        slots.default?.(),
      );
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
    return () =>
      h(
        ListboxPrimitive.ItemText as ArkPart,
        {
          ...attrs,
          class: cn(listboxItemTextVariants(), props.class, attrs.class),
        },
        slots.default?.(),
      );
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
    return () =>
      h(
        ListboxPrimitive.ItemGroup as ArkPart,
        {
          ...attrs,
          class: cn(listboxItemGroupVariants(), props.class, attrs.class),
        },
        () => [
          props.heading ? h(ListboxItemGroupLabel, null, () => props.heading) : null,
          slots.default?.(),
        ],
      );
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
    return () =>
      h(
        ListboxPrimitive.ItemGroupLabel as ArkPart,
        {
          ...attrs,
          class: cn(listboxItemGroupLabelVariants(), props.class, attrs.class),
        },
        slots.default?.(),
      );
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
    return () =>
      h(
        ListboxPrimitive.ValueText as ArkPart,
        {
          ...attrs,
          class: cn(listboxValueTextVariants(), props.class, attrs.class),
        },
        slots.default?.(),
      );
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
    return () =>
      h(
        ListboxPrimitive.ItemIndicator as ArkPart,
        {
          ...attrs,
          class: cn(listboxItemIndicatorVariants(), props.class, attrs.class),
        },
        slots.default?.() ?? h(PhCheck, { "aria-hidden": true }),
      );
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
    return () =>
      h(
        ListboxPrimitive.Empty as ArkPart,
        {
          ...attrs,
          class: cn(listboxEmptyVariants(), props.class, attrs.class),
        },
        slots.default?.(),
      );
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
    testId: String,
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
          testId: props.testId,
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
