import { Marquee as MarqueePrimitive } from "@ark-ui/vue/marquee";
import type { MarqueeProps as BaseMarqueeProps } from "@pisagor/props";
import { marqueeRecipe } from "@pisagor/recipes";
import { defineComponent, h, type PropType, type VNodeChild } from "vue";
import { createSlotRecipeContext } from "../internal/create-slot-recipe-context";

// #region Context
const {
  useStyles: useMarquee,
  withContext,
  withProvider,
} = createSlotRecipeContext({
  name: "Marquee",
  recipe: marqueeRecipe,
});
// #endregion

// #region Types
export interface MarqueeProps extends BaseMarqueeProps {
  orientation?: "horizontal" | "vertical";
  showEdges?: boolean;
  spacing?: string;
  speed?: number;
  items?: VNodeChild[];
  class?: unknown;
}
// #endregion

type ArkPart = Parameters<typeof h>[0];

// #region Parts
const MarqueeRootBase = withProvider(MarqueePrimitive.Root, {
  name: "Root",
  slot: "base",
});

export const MarqueeItem = withContext(MarqueePrimitive.Item, {
  name: "Item",
});

export const MarqueeEdge = withContext(MarqueePrimitive.Edge, {
  name: "Edge",
});

export const MarqueeRoot = defineComponent({
  inheritAttrs: false,
  name: "Marquee.Root",
  props: {
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
      const horizontal = props.orientation === "horizontal";

      return h(
        MarqueeRootBase,
        {
          ...attrs,
          "data-orientation": props.orientation,
          side: horizontal ? "start" : "bottom",
          spacing: props.spacing,
          speed: props.speed,
        },
        () => [
          slots.default?.(),
          props.showEdges
            ? [
                h(MarqueeEdge, {
                  key: "start",
                  side: horizontal ? "start" : "top",
                }),
                h(MarqueeEdge, {
                  key: "end",
                  side: horizontal ? "end" : "bottom",
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
  name: "Marquee.Content",
  props: {
    class: {
      default: undefined,
      type: [String, Object, Array] as PropType<unknown>,
    },
  },
  setup(props, { attrs, slots }) {
    const styles = useMarquee();

    return () =>
      h(
        MarqueePrimitive.Viewport as ArkPart,
        { class: styles.slots.viewport() },
        () =>
          h(
            MarqueePrimitive.Content as ArkPart,
            { ...attrs, class: styles.slots.content({ class: props.class }) },
            slots,
          ),
      );
  },
});
// #endregion

// #region Shorthand
export const MarqueeShorthand = defineComponent({
  inheritAttrs: false,
  name: "Marquee",
  props: {
    items: { default: undefined, type: Array as PropType<VNodeChild[]> },
  },
  setup(props, { attrs, slots }) {
    return () =>
      h(MarqueeRoot, { ...attrs }, () => [
        slots.default?.(),
        props.items?.length
          ? h(MarqueeContent, null, () =>
              props.items?.map((item, index) =>
                h(MarqueeItem, { key: index }, () => item),
              ),
            )
          : null,
      ]);
  },
});
// #endregion

export const Marquee = Object.assign(MarqueeShorthand, {
  Content: MarqueeContent,
  Edge: MarqueeEdge,
  Item: MarqueeItem,
  Root: MarqueeRoot,
});
