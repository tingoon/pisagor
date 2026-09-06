import { ScrollArea as ScrollAreaPrimitive } from "@ark-ui/vue/scroll-area";
import { type ScrollAreaRecipeSlot, scrollAreaRecipe } from "@pisagor/recipes/scroll-area";
import { defineComponent, h, type PropType, type VNodeChild } from "vue";
import type { VariantClassNames } from "../../internal/types";

// #region Types
export interface ScrollAreaProps {
  /**
   * Style recipe. Defaults to `scrollAreaRecipe` from `@pisagor/recipes/scroll-area`.
   *
   * @defaultValue scrollAreaRecipe
   */
  recipe?: typeof scrollAreaRecipe;
  class?: unknown;
  scrollFade?: boolean;
  /**
   * Slot class names.
   *
   * @example
   * `{ base: "...", viewport: "...", thumb: "..." }`
   */
  classNames?: VariantClassNames<ScrollAreaRecipeSlot>;
  /** Extra props forwarded to the scroll area viewport element. */
  viewportProps?: Record<string, unknown>;
  /** Extra props forwarded to each scroll area scrollbar element. */
  scrollbarProps?: Record<string, unknown>;
  /** Extra props forwarded to each scroll area thumb element. */
  thumbProps?: Record<string, unknown>;
  children?: VNodeChild;
}

type ArkPart = Parameters<typeof h>[0];

// #region Component
export const ScrollArea = defineComponent({
  inheritAttrs: false,
  name: "ScrollArea",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
    classNames: {
      default: undefined,
      type: Object as PropType<VariantClassNames<ScrollAreaRecipeSlot>>,
    },
    recipe: {
      default: scrollAreaRecipe,
      type: Function as PropType<typeof scrollAreaRecipe>,
    },
    scrollbarProps: { default: undefined, type: Object as PropType<Record<string, unknown>> },
    scrollFade: { default: false, type: Boolean },
    thumbProps: { default: undefined, type: Object as PropType<Record<string, unknown>> },
    viewportProps: { default: undefined, type: Object as PropType<Record<string, unknown>> },
  },
  setup(props, { attrs, slots }) {
    return () => {
      const slotsClasses = props.recipe({ scrollFade: props.scrollFade });

      return h(
        ScrollAreaPrimitive.Root as ArkPart,
        {
          ...attrs,
          class: slotsClasses.base({ class: props.class }),
        },
        () => [
          h(
            ScrollAreaPrimitive.Viewport as ArkPart,
            {
              ...(props.viewportProps ?? {}),
              class: slotsClasses.viewport({ class: props.classNames?.viewport }),
            },
            () => h(ScrollAreaPrimitive.Content as ArkPart, {}, () => slots.default?.()),
          ),
          h(
            ScrollAreaPrimitive.Scrollbar as ArkPart,
            {
              ...(props.scrollbarProps ?? {}),
              class: slotsClasses.scrollbar({ class: props.classNames?.scrollbar }),
              orientation: "vertical",
            },
            () =>
              h(
                ScrollAreaPrimitive.Thumb as ArkPart,
                {
                  ...(props.thumbProps ?? {}),
                  class: slotsClasses.thumb({ class: props.classNames?.thumb }),
                },
                undefined,
              ),
          ),
          h(
            ScrollAreaPrimitive.Scrollbar as ArkPart,
            {
              ...(props.scrollbarProps ?? {}),
              class: slotsClasses.scrollbar({ class: props.classNames?.scrollbar }),
              orientation: "horizontal",
            },
            () =>
              h(
                ScrollAreaPrimitive.Thumb as ArkPart,
                {
                  ...(props.thumbProps ?? {}),
                  class: slotsClasses.thumb({ class: props.classNames?.thumb }),
                },
                undefined,
              ),
          ),
          h(ScrollAreaPrimitive.Corner as ArkPart, {}),
        ],
      );
    };
  },
});
// #endregion
