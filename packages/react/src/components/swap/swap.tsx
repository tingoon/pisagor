import { Swap as SwapPrimitive } from "@ark-ui/react/swap";
import { type SwapVariantProps, swapVariants } from "@pisagor/recipes/swap";
import type { ComponentProps, ReactNode } from "react";

// #region Types
export type SwapOnIndicatorProps = ComponentProps<typeof SwapPrimitive.Indicator>;

export type SwapOffIndicatorProps = ComponentProps<typeof SwapPrimitive.Indicator>;

export type SwapRootProps = ComponentProps<typeof SwapPrimitive.Root>;

export interface SwapProps extends SwapRootProps, SwapVariantProps {
  /** Content shown when swapped off. */
  off?: ReactNode;
  /** Content shown when swapped on. */
  on?: ReactNode;
  /** Extra props forwarded to the off indicator element */
  offIndicatorProps?: Omit<SwapOffIndicatorProps, "children" | "type" | "className">;
  /** Extra props forwarded to the on indicator element */
  onIndicatorProps?: Omit<SwapOnIndicatorProps, "children" | "type" | "className">;
}
// #endregion

// #region Part
export function Swap({
  variant = "fade",
  children,
  off,
  offIndicatorProps,
  on,
  onIndicatorProps,
  className,
  ...rest
}: SwapProps) {
  return (
    <SwapPrimitive.Root {...rest} className={swapVariants({ className, variant })}>
      {on !== undefined && (
        <SwapPrimitive.Indicator {...onIndicatorProps} type="on">
          {on}
        </SwapPrimitive.Indicator>
      )}

      {off !== undefined && (
        <SwapPrimitive.Indicator {...offIndicatorProps} type="off">
          {off}
        </SwapPrimitive.Indicator>
      )}

      {children}
    </SwapPrimitive.Root>
  );
}
// #endregion

// #region Display Names
Swap.displayName = "Swap";
// #endregion
