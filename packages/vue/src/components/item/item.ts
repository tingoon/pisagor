import { ark } from "@ark-ui/vue/factory";
import { type ItemVariantProps, itemRecipe } from "@pisagor/recipes/item";
import { computed, defineComponent, h, type PropType, unref } from "vue";
import { provideItemContext, resolveItemVariant, useItemSlots } from "./item.context";
import { useItemGroupContextRef } from "./item-group.context";

type ArkPart = Parameters<typeof h>[0];

// #region Types
export interface ItemProps extends ItemVariantProps {
  class?: unknown;
}

export interface ItemMediaProps extends ItemVariantProps {
  class?: unknown;
}

export interface ItemHeaderProps {
  class?: unknown;
}
// #endregion

// #region Parts
export const ItemRoot = defineComponent({
  inheritAttrs: false,
  name: "ItemRoot",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
    variant: {
      default: undefined,
      type: String as PropType<ItemVariantProps["variant"]>,
    },
  },
  setup(props, { attrs, slots }) {
    const groupRef = useItemGroupContextRef();
    const itemSlots = itemRecipe();

    provideItemContext(
      computed(() => {
        const group = groupRef === undefined ? undefined : unref(groupRef);

        return {
          slots: itemSlots,
          variant: resolveItemVariant(props.variant, group?.variant),
        };
      }),
    );

    return () => {
      const group = groupRef === undefined ? undefined : unref(groupRef);
      const resolvedVariant = resolveItemVariant(props.variant, group?.variant);

      return h(
        ark.div as ArkPart,
        {
          ...attrs,
          class: itemSlots.base({ class: props.class, variant: resolvedVariant }),
          "data-part": "root",
          "data-scope": "item",
          "data-variant": resolvedVariant,
        },
        slots.default?.(),
      );
    };
  },
});

export const ItemMedia = defineComponent({
  inheritAttrs: false,
  name: "ItemMedia",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
    variant: {
      default: "default",
      type: String as PropType<ItemVariantProps["variant"]>,
    },
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
        slots.default?.(),
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
