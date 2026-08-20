import { Swap as SwapPrimitive } from "@ark-ui/react/swap";
import { type SwapVariantProps, swapVariants } from "@pisagor/styles/ui/swap";
import type { ComponentProps, ReactNode } from "react";
import type { WithTestId } from "../../internal/types";

// #region Types
export type SwapOnIndicatorProps = ComponentProps<typeof SwapPrimitive.Indicator>;

export type SwapOffIndicatorProps = ComponentProps<typeof SwapPrimitive.Indicator>;

export type SwapRootProps = ComponentProps<typeof SwapPrimitive.Root>;

export interface SwapProps extends SwapRootProps, SwapVariantProps, WithTestId {
  /** Content shown when swapped on. */
  on?: ReactNode;
  /** Content shown when swapped off. */
  off?: ReactNode;
  /** Extra props forwarded to the on indicator element */
  onIndicatorProps?: Omit<SwapOnIndicatorProps, "children" | "type" | "className">;
  /** Extra props forwarded to the off indicator element */
  offIndicatorProps?: Omit<SwapOffIndicatorProps, "children" | "type" | "className">;
}
// #endregion

// #region Part
export function Swap({
  variant = "fade",
  className,
  lazyMount = true,
  unmountOnExit = true,
  on,
  off,
  onIndicatorProps,
  offIndicatorProps,
  children,
  testId,
  ...rest
}: SwapProps) {
  return (
    <SwapPrimitive.Root
      {...rest}
      className={swapVariants({ className, variant })}
      data-testid={testId}
      lazyMount={lazyMount}
      unmountOnExit={unmountOnExit}
    >
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
