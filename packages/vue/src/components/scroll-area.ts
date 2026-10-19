import { ScrollArea as ScrollAreaPrimitive } from "@ark-ui/vue";
import type {
  ScrollAreaContract,
  ScrollAreaRootContract,
} from "@pisagor/contracts";
import { scrollAreaRecipe } from "@pisagor/recipes";
import { defineComponent, h, type PropType, type VNodeChild } from "vue";
import { type ClassValue, createSlotRecipeContext } from "../internal";

// #region Context
const { useStyles, withContext, withProvider } = createSlotRecipeContext({
  name: "ScrollArea",
  recipe: scrollAreaRecipe,
});
// #endregion

// #region Parts
const ScrollAreaRoot = withProvider<ScrollAreaRootContract>(
  ScrollAreaPrimitive.Root,
  {
    name: "Root",
    slot: "base",
  },
);

const ScrollAreaScrollbar = withContext(ScrollAreaPrimitive.Scrollbar, {
  name: "Scrollbar",
});

const ScrollAreaThumb = withContext(ScrollAreaPrimitive.Thumb, {
  name: "Thumb",
});
// #endregion

type ArkPart = Parameters<typeof h>[0];

const ScrollAreaViewport = defineComponent({
  inheritAttrs: false,
  name: "ScrollArea.Viewport",
  props: {
    class: { default: undefined, type: String as PropType<string> },
  },
  setup(props, { attrs, slots }) {
    const styles = useStyles();

    return () =>
      h(
        ScrollAreaPrimitive.Viewport as ArkPart,
        { ...attrs, class: styles.slots.viewport({ class: props.class }) },
        () => h(ScrollAreaPrimitive.Content as ArkPart, null, slots),
      );
  },
});

// #region Types

export interface ScrollAreaProps
  extends ScrollAreaRootContract, ScrollAreaContract {
  class?: unknown;
  scrollFade?: boolean;
  scrollbarProps?: Record<string, unknown>;
  thumbProps?: Record<string, unknown>;
  viewportProps?: Record<string, unknown>;
}
// #endregion

// #region Closed
const ScrollAreaShorthand = defineComponent({
  inheritAttrs: false,
  name: "ScrollArea",
  props: {
    class: {
      default: undefined,
      type: [String, Object, Array] as PropType<ClassValue>,
    },
    classNames: {
      default: undefined,
      type: Object as PropType<ScrollAreaProps["classNames"]>,
    },
    scrollbarProps: {
      default: undefined,
      type: Object as PropType<Record<string, unknown>>,
    },
    scrollFade: { default: undefined, type: Boolean },
    thumbProps: {
      default: undefined,
      type: Object as PropType<Record<string, unknown>>,
    },
    viewportProps: {
      default: undefined,
      type: Object as PropType<Record<string, unknown>>,
    },
  },
  setup(props, { attrs, slots }) {
    return () =>
      h(
        ScrollAreaRoot,
        { ...attrs, class: props.class, scrollFade: props.scrollFade },
        () => {
          const children: VNodeChild[] = [
            h(
              ScrollAreaViewport,
              { ...props.viewportProps, class: props.classNames?.viewport },
              slots,
            ),
          ];

          for (const orientation of ["vertical", "horizontal"] as const) {
            children.push(
              h(
                ScrollAreaScrollbar,
                {
                  ...props.scrollbarProps,
                  class: props.classNames?.scrollbar,
                  orientation,
                },
                () =>
                  h(ScrollAreaThumb, {
                    ...props.thumbProps,
                    class: props.classNames?.thumb,
                  }),
              ),
            );
          }

          children.push(h(ScrollAreaPrimitive.Corner as ArkPart));

          return children;
        },
      );
  },
});
// #endregion

export const ScrollArea = Object.assign(ScrollAreaShorthand, {
  Corner: ScrollAreaPrimitive.Corner,
  Root: ScrollAreaRoot,
  Scrollbar: ScrollAreaScrollbar,
  Thumb: ScrollAreaThumb,
  Viewport: ScrollAreaViewport,
});
