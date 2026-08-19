import { Swap as SwapPrimitive } from "@ark-ui/vue/swap";
import { swapVariants } from "@pisagor/styles/ui/swap";
import { cn } from "@pisagor/utils";
import type { VariantProps } from "tailwind-variants";
import { defineComponent, h, type PropType, type VNodeChild } from "vue";
import type { WithTestId } from "../../internal/types";

// #region Types
type SwapVariantProps = VariantProps<typeof swapVariants>;
export type SwapVariant = NonNullable<SwapVariantProps["variant"]>;

export interface SwapProps extends WithTestId {
  class?: unknown;
  lazyMount?: boolean;
  /**
   * Whether the swap shows the `on` or `off` indicator.
   *
   * @remarks
   * Mirrored from Ark UI’s `swap` prop.
   */
  swap?: boolean;
  unmountOnExit?: boolean;
  variant?: SwapVariant;
  /** Content shown when swapped on. */
  on?: VNodeChild;
  /** Content shown when swapped off. */
  off?: VNodeChild;
  /** Extra props forwarded to the `on` indicator element. */
  onIndicatorProps?: Record<string, unknown>;
  /** Extra props forwarded to the `off` indicator element. */
  offIndicatorProps?: Record<string, unknown>;
}

type ArkPart = Parameters<typeof h>[0];

// #region Components
export const Swap = defineComponent({
  inheritAttrs: false,
  name: "PisagorSwap",
  props: {
    class: { default: undefined, type: [String, Object, Array] as PropType<unknown> },
    lazyMount: { default: true, type: Boolean },
    off: { default: undefined, type: [String, Object, Array, Function] as PropType<VNodeChild> },
    offIndicatorProps: { default: undefined, type: Object as PropType<Record<string, unknown>> },
    on: { default: undefined, type: [String, Object, Array, Function] as PropType<VNodeChild> },
    onIndicatorProps: { default: undefined, type: Object as PropType<Record<string, unknown>> },
    swap: { default: false, type: Boolean },
    testId: String,
    unmountOnExit: { default: true, type: Boolean },
    variant: { default: "fade", type: String as PropType<SwapVariant> },
  },
  setup(props, { attrs, slots }) {
    return () =>
      h(
        SwapPrimitive.Root as ArkPart,
        {
          ...attrs,
          class: cn(swapVariants({ variant: props.variant }), props.class),
          "data-testid": props.testId,
          lazyMount: props.lazyMount,
          swap: props.swap,
          unmountOnExit: props.unmountOnExit,
        },
        () => [
          props.on !== undefined
            ? h(
                SwapPrimitive.Indicator as ArkPart,
                {
                  ...(props.onIndicatorProps ?? {}),
                  type: "on",
                },
                () => props.on,
              )
            : null,
          props.off !== undefined
            ? h(
                SwapPrimitive.Indicator as ArkPart,
                {
                  ...(props.offIndicatorProps ?? {}),
                  type: "off",
                },
                () => props.off,
              )
            : null,
          slots.default?.(),
        ],
      );
  },
});
// #endregion
