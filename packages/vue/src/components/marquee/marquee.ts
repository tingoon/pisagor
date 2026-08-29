import { Marquee as MarqueePrimitive } from "@ark-ui/vue/marquee";
import { marqueeRecipe } from "@pisagor/recipes/marquee";
import { cn } from "@pisagor/utils";
import { defineComponent, h, type PropType, type VNodeChild } from "vue";

// #region Types
export interface MarqueeProps {
  orientation?: "horizontal" | "vertical";
  showEdges?: boolean;
  spacing?: string;
  speed?: number;
  items?: VNodeChild[];
  class?: unknown;
}

type ArkPart = Parameters<typeof h>[0];

// #region Parts
export const MarqueeRoot = defineComponent({
  inheritAttrs: false,
  name: "MarqueeRoot",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
    items: { default: undefined, type: Array as PropType<VNodeChild[]> },
    orientation: {
      default: "horizontal",
      type: String as PropType<"horizontal" | "vertical">,
    },
    showEdges: { default: true, type: Boolean },
    spacing: { default: "16px", type: String },
    speed: { default: 50, type: Number },
  },
  setup(props, { attrs, slots }) {
    return () => {
      const side = props.orientation === "horizontal" ? "start" : "bottom";
      const items = props.items;
      const variantSlots = marqueeRecipe();

      return h(
        MarqueePrimitive.Root as ArkPart,
        {
          ...attrs,
          class: variantSlots.base({ class: props.class }),
          "data-orientation": props.orientation,
          side,
          spacing: props.spacing,
          speed: props.speed,
        },
        () => [
          slots.default?.(),
          items?.length
            ? h(MarqueeContent, null, () =>
                items.map((item, index) => h(MarqueeItem, { key: index }, () => item)),
              )
            : null,
          props.showEdges
            ? [
                h(MarqueeEdge, {
                  key: "start",
                  side: props.orientation === "horizontal" ? "start" : "top",
                }),
                h(MarqueeEdge, {
                  key: "end",
                  side: props.orientation === "horizontal" ? "end" : "bottom",
                }),
              ]
            : null,
        ],
      );
    };
  },
});

export const MarqueeContent = defineComponent({
  inheritAttrs: false,
  name: "MarqueeContent",
  setup(_, { attrs, slots: children }) {
    return () => {
      const variantSlots = marqueeRecipe();

      return h(MarqueePrimitive.Viewport as ArkPart, { class: variantSlots.viewport() }, () =>
        h(
          MarqueePrimitive.Content as ArkPart,
          {
            ...attrs,
            class: variantSlots.content({ class: cn(attrs.class) }),
          },
          children,
        ),
      );
    };
  },
});

export const MarqueeItem = defineComponent({
  inheritAttrs: false,
  name: "MarqueeItem",
  setup(_, { attrs, slots }) {
    return () => {
      const variantSlots = marqueeRecipe();

      return h(
        MarqueePrimitive.Item as ArkPart,
        {
          ...attrs,
          class: variantSlots.item({ class: cn(attrs.class) }),
        },
        slots,
      );
    };
  },
});

export const MarqueeEdge = defineComponent({
  inheritAttrs: false,
  name: "MarqueeEdge",
  setup(_, { attrs, slots }) {
    return () => {
      const variantSlots = marqueeRecipe();

      return h(
        MarqueePrimitive.Edge as ArkPart,
        {
          ...attrs,
          class: variantSlots.edge({ class: cn(attrs.class) }),
        },
        slots,
      );
    };
  },
});

export const MarqueeShorthand = defineComponent({
  inheritAttrs: false,
  name: "MarqueeShorthand",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
    items: { default: undefined, type: Array as PropType<VNodeChild[]> },
    orientation: {
      default: "horizontal",
      type: String as PropType<"horizontal" | "vertical">,
    },
    showEdges: { default: true, type: Boolean },
    spacing: { default: "16px", type: String },
    speed: { default: 50, type: Number },
  },
  setup(props, { attrs }) {
    return () => h(MarqueeRoot, { ...attrs, ...props }, {});
  },
});
// #endregion
