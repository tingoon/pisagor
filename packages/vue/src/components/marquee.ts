import { Marquee as MarqueePrimitive } from "@ark-ui/vue";
import type { MarqueeContract, MarqueeRootContract } from "@pisagor/contracts";
import { marqueeRecipe } from "@pisagor/recipes";
import { defineComponent, h, type PropType, type VNodeChild } from "vue";
import { type ClassValue, createSlotRecipeContext } from "../internal";

// #region Context
const { withContext, withProvider } = createSlotRecipeContext({
  name: "Marquee",
  recipe: marqueeRecipe,
});
// #endregion

// #region Types
export interface MarqueeRootProps extends MarqueeRootContract {
  /** @defaultValue "horizontal" */
  orientation?: "horizontal" | "vertical";
  /** @defaultValue "calc(var(--spacing) * 4)" */
  spacing?: string;
  /** @defaultValue 50 */
  speed?: number;
}

export interface MarqueeProps
  extends MarqueeRootProps, MarqueeRootContract, MarqueeContract {
  class?: ClassValue;
  items?: VNodeChild[];
  /**
   * Whether to show the fading edges.
   *
   * @defaultValue true
   */
  showEdges?: boolean;
}
// #endregion

// #region Parts
const MarqueeRootBase = withProvider<MarqueeRootContract>(
  MarqueePrimitive.Root,
  { name: "Root" },
);

/** Root; maps `orientation` to the Ark `side` and sets spacing / speed defaults. */
const MarqueeRoot = defineComponent({
  inheritAttrs: false,
  name: "Marquee.Root",
  props: {
    orientation: {
      default: "horizontal",
      type: String as PropType<"horizontal" | "vertical">,
    },
    spacing: { default: "calc(var(--spacing) * 4)", type: String },
    speed: { default: 50, type: Number },
  },
  setup(props, { attrs, slots }) {
    return () => {
      const horizontal = props.orientation !== "vertical";

      return h(
        MarqueeRootBase,
        {
          ...attrs,
          "data-orientation": horizontal ? "horizontal" : "vertical",
          side: horizontal ? "start" : "bottom",
          spacing: props.spacing,
          speed: props.speed,
        },
        slots,
      );
    };
  },
});

const MarqueeViewport = withContext(MarqueePrimitive.Viewport, {
  name: "Viewport",
});

const MarqueeContent = withContext(MarqueePrimitive.Content, {
  name: "Content",
});

const MarqueeItem = withContext(MarqueePrimitive.Item, {
  name: "Item",
});

const MarqueeEdge = withContext(MarqueePrimitive.Edge, {
  name: "Edge",
});
// #endregion

// #region Shorthand
const MarqueeShorthand = defineComponent({
  inheritAttrs: false,
  name: "Marquee",
  props: {
    class: {
      default: undefined,
      type: [String, Object, Array] as PropType<ClassValue>,
    },
    classNames: {
      default: undefined,
      type: Object as PropType<MarqueeProps["classNames"]>,
    },
    items: { default: undefined, type: Array as PropType<VNodeChild[]> },
    orientation: {
      default: "horizontal",
      type: String as PropType<"horizontal" | "vertical">,
    },
    showEdges: { default: true, type: Boolean },
  },
  setup(props, { attrs }) {
    return () => {
      const horizontal = props.orientation !== "vertical";

      return h(
        MarqueeRoot,
        { ...attrs, class: props.class, orientation: props.orientation },
        () => [
          h(MarqueeViewport, { class: props.classNames?.viewport }, () =>
            h(MarqueeContent, { class: props.classNames?.content }, () =>
              props.items?.map((item, index) =>
                h(
                  MarqueeItem,
                  { class: props.classNames?.item, key: index },
                  () => item,
                ),
              ),
            ),
          ),
          props.showEdges
            ? [
                h(MarqueeEdge, {
                  class: props.classNames?.edge,
                  key: "start",
                  side: horizontal ? "start" : "top",
                }),
                h(MarqueeEdge, {
                  class: props.classNames?.edge,
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
// #endregion

export type {
  MarqueeContentProps,
  MarqueeEdgeProps,
  MarqueeItemProps,
  MarqueeViewportProps,
} from "@ark-ui/vue";

export const Marquee = Object.assign(MarqueeShorthand, {
  Content: MarqueeContent,
  Edge: MarqueeEdge,
  Item: MarqueeItem,
  Root: MarqueeRoot,
  Viewport: MarqueeViewport,
});
