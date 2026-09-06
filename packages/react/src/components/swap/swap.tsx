import {
  type SwapIndicatorProps,
  Swap as SwapPrimitive,
  type SwapRootProps,
} from "@ark-ui/react/swap";
import { type SwapVariantProps, swapRecipe } from "@pisagor/recipes/swap";
import type { ReactNode } from "react";

// #region Types
export type SwapOnIndicatorProps = SwapIndicatorProps;

export type SwapOffIndicatorProps = SwapIndicatorProps;

export interface SwapProps extends SwapRootProps, SwapVariantProps {
  /** Content shown when swapped off. */
  off?: ReactNode;
  /** Content shown when swapped on. */
  on?: ReactNode;
  /**
   * Style recipe. Defaults to `swapRecipe` from `@pisagor/recipes/swap`.
   *
   * @defaultValue swapRecipe
   */
  recipe?: typeof swapRecipe;
  /** Extra props forwarded to the off indicator element */
  offIndicatorProps?: Omit<SwapOffIndicatorProps, "children" | "type" | "className">;
  /** Extra props forwarded to the on indicator element */
  onIndicatorProps?: Omit<SwapOnIndicatorProps, "children" | "type" | "className">;
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
