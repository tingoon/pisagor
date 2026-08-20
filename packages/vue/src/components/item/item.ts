import { ark } from "@ark-ui/vue/factory";
import {
  type ItemMediaVariantProps,
  type ItemVariantProps,
  itemActionsVariants,
  itemContentVariants,
  itemDescriptionVariants,
  itemFooterVariants,
  itemGroupVariants,
  itemHeaderVariants,
  itemInlineVariants,
  itemMediaVariants,
  itemSeparatorVariants,
  itemTitleVariants,
  itemVariants,
} from "@pisagor/styles/ui/item";
import { cn } from "@pisagor/utils";
import { defineComponent, h, type PropType, type VNodeChild } from "vue";
import type { WithTestId } from "../../internal/types";
import { Separator } from "../separator";

type ArkPart = Parameters<typeof h>[0];

// #region Types
export interface ItemProps extends WithTestId {
  class?: unknown;
  variant?: ItemVariantProps["variant"];
}

export interface ItemMediaProps {
  class?: unknown;
  variant?: ItemMediaVariantProps["variant"];
}

export interface ItemHeaderProps {
  class?: unknown;
  /** Shorthand: renders an ItemDescription inside the header. */
  description?: VNodeChild;
  /** Shorthand: renders an ItemTitle inside the header. */
  title?: VNodeChild;
}
// #endregion

// #region Parts
export const ItemGroup = defineComponent({
  inheritAttrs: false,
  name: "ItemGroup",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
  },
  setup(props, { attrs, slots }) {
    return () =>
      h(
        ark.div as ArkPart,
        {
          ...attrs,
          class: cn(itemGroupVariants(), props.class),
          "data-part": "group",
          "data-scope": "item",
          role: "list",
        },
        slots.default?.(),
      );
  },
});

export const ItemSeparator = defineComponent({
  inheritAttrs: false,
  name: "ItemSeparator",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
  },
  setup(props, { attrs }) {
    return () =>
      h(Separator as ArkPart, {
        ...attrs,
        class: cn(itemSeparatorVariants(), props.class),
        dataPart: "separator",
        dataScope: "item",
        orientation: "horizontal",
      });
  },
});

export const ItemRoot = defineComponent({
  inheritAttrs: false,
  name: "ItemRoot",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
    testId: String,
    variant: { default: "default", type: String as PropType<ItemVariantProps["variant"]> },
  },
  setup(props, { attrs, slots }) {
    return () =>
      h(
        ark.div as ArkPart,
        {
          ...attrs,
          class: cn(itemVariants({ variant: props.variant }), props.class),
          "data-part": "root",
          "data-scope": "item",
          "data-testid": props.testId,
          "data-variant": props.variant,
        },
        slots.default?.(),
      );
  },
});

export const ItemMedia = defineComponent({
  inheritAttrs: false,
  name: "ItemMedia",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
    variant: { default: "default", type: String as PropType<ItemMediaVariantProps["variant"]> },
  },
  setup(props, { attrs, slots }) {
    return () =>
      h(
        ark.div as ArkPart,
        {
          ...attrs,
          class: cn(itemMediaVariants({ variant: props.variant }), props.class),
          "data-part": "media",
          "data-scope": "item",
          "data-variant": props.variant,
        },
        slots.default?.(),
      );
  },
});

export const ItemContent = defineComponent({
  inheritAttrs: false,
  name: "ItemContent",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
  },
  setup(props, { attrs, slots }) {
    return () =>
      h(
        ark.div as ArkPart,
        {
          ...attrs,
          class: cn(itemContentVariants(), props.class),
          "data-part": "content",
          "data-scope": "item",
        },
        slots.default?.(),
      );
  },
});

export const ItemTitle = defineComponent({
  inheritAttrs: false,
  name: "ItemTitle",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
  },
  setup(props, { attrs, slots }) {
    return () =>
      h(
        ark.div as ArkPart,
        {
          ...attrs,
          class: cn(itemTitleVariants(), props.class),
          "data-part": "title",
          "data-scope": "item",
        },
        slots.default?.(),
      );
  },
});

export const ItemDescription = defineComponent({
  inheritAttrs: false,
  name: "ItemDescription",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
  },
  setup(props, { attrs, slots }) {
    return () =>
      h(
        ark.p as ArkPart,
        {
          ...attrs,
          class: cn(itemDescriptionVariants(), props.class),
          "data-part": "description",
          "data-scope": "item",
        },
        slots.default?.(),
      );
  },
});

export const ItemActions = defineComponent({
  inheritAttrs: false,
  name: "ItemActions",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
  },
  setup(props, { attrs, slots }) {
    return () =>
      h(
        ark.div as ArkPart,
        {
          ...attrs,
          class: cn(itemActionsVariants(), props.class),
          "data-part": "actions",
          "data-scope": "item",
        },
        slots.default?.(),
      );
  },
});

export const ItemHeader = defineComponent({
  inheritAttrs: false,
  name: "ItemHeader",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
    description: {
      default: undefined,
      type: [String, Number, Boolean, Object, Array] as PropType<VNodeChild>,
    },
    title: {
      default: undefined,
      type: [String, Number, Boolean, Object, Array] as PropType<VNodeChild>,
    },
  },
  setup(props, { attrs, slots }) {
    return () =>
      h(
        ark.div as ArkPart,
        {
          ...attrs,
          class: cn(itemHeaderVariants(), props.class),
          "data-part": "header",
          "data-scope": "item",
        },
        () => [
          props.title || props.description
            ? h("div", { class: itemInlineVariants() }, [
                props.title ? h(ItemTitle, null, () => props.title) : null,
                props.description ? h(ItemDescription, null, () => props.description) : null,
              ])
            : null,
          slots.default?.(),
        ],
      );
  },
});

export const ItemFooter = defineComponent({
  inheritAttrs: false,
  name: "ItemFooter",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
  },
  setup(props, { attrs, slots }) {
    return () =>
      h(
        ark.div as ArkPart,
        {
          ...attrs,
          class: cn(itemFooterVariants(), props.class),
          "data-part": "footer",
          "data-scope": "item",
        },
        slots.default?.(),
      );
  },
});
// #endregion
