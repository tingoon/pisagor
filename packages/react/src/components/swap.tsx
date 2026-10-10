import {
  type SwapIndicatorProps,
  Swap as SwapPrimitive,
  type SwapRootProps,
} from "@ark-ui/react/swap";
import type { SwapProps as BaseSwapProps } from "@pisagor/props";
import { swapRecipe } from "@pisagor/recipes";
import type { ReactNode } from "react";

// #region Types
export type SwapOnIndicatorProps = SwapIndicatorProps;

export type SwapOffIndicatorProps = SwapIndicatorProps;

export interface SwapProps extends SwapRootProps, BaseSwapProps {
  /** Content shown when swapped off. */
  off?: ReactNode;
  /** Content shown when swapped on. */
  on?: ReactNode;
  /** Extra props forwarded to the off indicator element */
  offIndicatorProps?: Omit<
    SwapOffIndicatorProps,
    "children" | "type" | "className"
  >;
  /** Extra props forwarded to the on indicator element */
  onIndicatorProps?: Omit<
    SwapOnIndicatorProps,
    "children" | "type" | "className"
  >;
}
// #endregion

// #region Component
export function Swap({
  variant = "fade",
  children,
  off,
  offIndicatorProps,
  on,
  onIndicatorProps,
  recipe = swapRecipe,
  className,
  ...rest
}: SwapProps) {
  return (
    <SwapPrimitive.Root {...rest} className={recipe({ className, variant })}>
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

export type { SwapIndicatorProps } from "@ark-ui/react/swap";
