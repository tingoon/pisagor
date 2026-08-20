import { ScrollArea as ScrollAreaPrimitive } from "@ark-ui/vue/scroll-area";
import { scrollAreaVariants } from "@pisagor/styles/ui/scroll-area";
import { cn } from "@pisagor/utils";
import { defineComponent, h, type PropType, type VNodeChild } from "vue";
import type { VariantClassNames, WithTestId } from "../../internal/types";

// #region Types
export interface ScrollAreaProps extends WithTestId {
  class?: unknown;
  scrollFade?: boolean;
  /**
   * Slot class names.
   *
   * @example
   * `{ root: "...", viewport: "...", thumb: "..." }`
   */
  classNames?: VariantClassNames<typeof scrollAreaVariants>;
  /** Extra props forwarded to the scroll area viewport element. */
  viewportProps?: Record<string, unknown>;
  /** Extra props forwarded to each scroll area scrollbar element. */
  scrollbarProps?: Record<string, unknown>;
  /** Extra props forwarded to each scroll area thumb element. */
  thumbProps?: Record<string, unknown>;
  children?: VNodeChild;
}

type ArkPart = Parameters<typeof h>[0];

// #region Part
export const ScrollArea = defineComponent({
  inheritAttrs: false,
  name: "ScrollArea",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
    classNames: {
      default: undefined,
      type: Object as PropType<VariantClassNames<typeof scrollAreaVariants>>,
    },
    scrollbarProps: { default: undefined, type: Object as PropType<Record<string, unknown>> },
    scrollFade: { default: false, type: Boolean },
    testId: String,
    thumbProps: { default: undefined, type: Object as PropType<Record<string, unknown>> },
    viewportProps: { default: undefined, type: Object as PropType<Record<string, unknown>> },
  },
  setup(props, { attrs, slots }) {
    return () => {
      const slotsClasses = scrollAreaVariants({ scrollFade: props.scrollFade });

      return h(
        ScrollAreaPrimitive.Root as ArkPart,
        {
          ...attrs,
          class: cn(slotsClasses.root(), props.class, props.classNames?.root),
          "data-testid": props.testId,
        },
        () => [
          h(
            ScrollAreaPrimitive.Viewport as ArkPart,
            {
              ...(props.viewportProps ?? {}),
              class: cn(slotsClasses.viewport(), props.classNames?.viewport),
            },
            () => h(ScrollAreaPrimitive.Content as ArkPart, {}, () => slots.default?.()),
          ),
          h(
            ScrollAreaPrimitive.Scrollbar as ArkPart,
            {
              ...(props.scrollbarProps ?? {}),
              class: cn(slotsClasses.scrollbar(), props.classNames?.scrollbar),
              orientation: "vertical",
            },
            () =>
              h(
                ScrollAreaPrimitive.Thumb as ArkPart,
                {
                  ...(props.thumbProps ?? {}),
                  class: cn(slotsClasses.thumb(), props.classNames?.thumb),
                },
                undefined,
              ),
          ),
          h(
            ScrollAreaPrimitive.Scrollbar as ArkPart,
            {
              ...(props.scrollbarProps ?? {}),
              class: cn(slotsClasses.scrollbar(), props.classNames?.scrollbar),
              orientation: "horizontal",
            },
            () =>
              h(
                ScrollAreaPrimitive.Thumb as ArkPart,
                {
                  ...(props.thumbProps ?? {}),
                  class: cn(slotsClasses.thumb(), props.classNames?.thumb),
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
