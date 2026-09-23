import type { SwapRecipeFn, SwapVariantProps } from "@pisagor/recipes/swap";

/** Swap props. */
export interface SwapProps extends SwapVariantProps {
  /**
   * Style recipe override.
   * @defaultValue swapRecipe
   */
  recipe?: SwapRecipeFn;
}
