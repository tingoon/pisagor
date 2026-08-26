import { ark } from "@ark-ui/vue/factory";
import { type ItemVariantProps, type ItemVariants, itemVariants } from "@pisagor/styles/ui/item";
import { cn } from "@pisagor/utils";
import { defineComponent, h, type PropType, type VNodeChild } from "vue";
import type { WithTestId } from "../../internal/types";
import { createContext } from "../../utils/create-context";
import { Separator } from "../separator";

type ArkPart = Parameters<typeof h>[0];

// #region Types
export interface ItemProps extends WithTestId {
  class?: unknown;
  variant?: ItemVariantProps["variant"];
}

export interface ItemMediaProps {
  class?: unknown;
  variant?: ItemVariantProps["variant"];
}

export interface ItemHeaderProps {
  class?: unknown;
  /** Shorthand: renders an ItemDescription inside the header. */
  description?: VNodeChild;
  /** Shorthand: renders an ItemTitle inside the header. */
  title?: VNodeChild;
}

interface ItemContextValue {
  slots: ItemVariants;
}
// #endregion

// #region Context
const [provideItemContext, useItemContext] = createContext<ItemContextValue>({
  name: "Item",
});

function useItemSlots() {
  const context = useItemContext();

  if (!context) {
    throw new Error("useItem must be used within ItemContext.");
  }

  return context.slots;
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
    const itemSlots = itemVariants();
    provideItemContext({ slots: itemSlots });

    return () =>
      h(
        ark.div as ArkPart,
        {
          ...attrs,
          class: cn(itemSlots.group(), props.class),
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
    const itemSlots = useItemSlots();

    return () =>
      h(Separator as ArkPart, {
        ...attrs,
        class: cn(itemSlots.separator(), props.class),
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
    const itemSlots = useItemSlots();

    return () =>
      h(
        ark.div as ArkPart,
        {
          ...attrs,
          class: itemSlots.base({ class: props.class, variant: props.variant }),
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
    variant: { default: "default", type: String as PropType<ItemVariantProps["variant"]> },
  },
  setup(props, { attrs, slots }) {
    const itemSlots = useItemSlots();

    return () =>
      h(
        ark.div as ArkPart,
        {
          ...attrs,
          class: itemSlots.media({ class: props.class, variant: props.variant }),
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
    const itemSlots = useItemSlots();

    return () =>
      h(
        ark.div as ArkPart,
        {
          ...attrs,
          class: itemSlots.content({ class: props.class }),
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
    const itemSlots = useItemSlots();

    return () =>
      h(
        ark.div as ArkPart,
        {
          ...attrs,
          class: itemSlots.title({ class: props.class }),
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
    const itemSlots = useItemSlots();

    return () =>
      h(
        ark.p as ArkPart,
        {
          ...attrs,
          class: itemSlots.description({ class: props.class }),
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
    const itemSlots = useItemSlots();

    return () =>
      h(
        ark.div as ArkPart,
        {
          ...attrs,
          class: itemSlots.actions({ class: props.class }),
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
    const itemSlots = useItemSlots();

    return () =>
      h(
        ark.div as ArkPart,
        {
          ...attrs,
          class: itemSlots.header({ class: props.class }),
          "data-part": "header",
          "data-scope": "item",
        },
        () => [
          props.title || props.description
            ? h("div", { class: itemSlots.inline() }, [
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
    const itemSlots = useItemSlots();

    return () =>
      h(
        ark.div as ArkPart,
        {
          ...attrs,
          class: itemSlots.footer({ class: props.class }),
          "data-part": "footer",
          "data-scope": "item",
        },
        slots.default?.(),
      );
  },
});
// #endregion
