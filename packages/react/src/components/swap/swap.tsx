import { Swap as SwapPrimitive } from "@ark-ui/react/swap";
import { type SwapVariantProps, swapVariants } from "@pisagor/styles/ui/swap";
import { cn } from "@pisagor/utils";
import type { ComponentProps, ReactNode } from "react";
import type { WithTestId } from "../../internal/types";

// #region Variants

// #endregion

// #region Types
type SwapOnIndicatorProps = ComponentProps<typeof SwapPrimitive.Indicator>;

type SwapOffIndicatorProps = ComponentProps<typeof SwapPrimitive.Indicator>;

type SwapRootProps = ComponentProps<typeof SwapPrimitive.Root>;

interface SwapProps extends SwapRootProps, SwapVariantProps, WithTestId {
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

// #region Component
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
      className={cn(swapVariants({ variant }), className)}
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
