import { ScrollArea as ScrollAreaPrimitive } from "@ark-ui/vue/scroll-area";
import type { ScrollAreaProps as BaseScrollAreaRootProps } from "@pisagor/props";
import { type ScrollAreaRecipeSlot, scrollAreaRecipe } from "@pisagor/recipes";
import { defineComponent, h, type PropType, type VNodeChild } from "vue";
import { createSlotRecipeContext } from "../internal/create-slot-recipe-context";
import type { VariantClassNames } from "../internal/types";

// #region Context
const {
  useStyles: useScrollArea,
  withContext,
  withProvider,
} = createSlotRecipeContext({
  name: "ScrollArea",
  recipe: scrollAreaRecipe,
});
// #endregion

// #region Parts
const ScrollAreaRoot = withProvider(ScrollAreaPrimitive.Root, {
  name: "Root",
  slot: "base",
});

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
    const styles = useScrollArea();

    return () =>
      h(
        ScrollAreaPrimitive.Viewport as ArkPart,
        { ...attrs, class: styles.slots.viewport({ class: props.class }) },
        () => h(ScrollAreaPrimitive.Content as ArkPart, null, slots),
      );
  },
});

// #region Types
type ScrollAreaClassNames = VariantClassNames<ScrollAreaRecipeSlot>;

export interface ScrollAreaProps extends BaseScrollAreaRootProps {
  class?: unknown;
  classNames?: ScrollAreaClassNames;
  scrollFade?: boolean;
  scrollbarProps?: Record<string, unknown>;
  thumbProps?: Record<string, unknown>;
  viewportProps?: Record<string, unknown>;
}
// #endregion

// #region Closed
export const ScrollArea = defineComponent({
  inheritAttrs: false,
  name: "ScrollArea",
  props: {
    class: {
      default: undefined,
      type: [String, Object, Array] as PropType<unknown>,
    },
    classNames: {
      default: undefined,
      type: Object as PropType<ScrollAreaClassNames>,
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
