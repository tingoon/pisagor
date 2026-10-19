import type { SwapRecipeFn, SwapVariantProps } from "@pisagor/recipes";

/**
 * Shared Swap root contract: visual variants and recipe override. Used by
 * compound roots; excludes host DOM attributes.
 */
export interface SwapRootContract extends SwapVariantProps {
  /**
   * Style recipe override.
   *
   * @defaultValue swapRecipe
   */
  recipe?: SwapRecipeFn;
}

/**
 * Swap shorthand content contract. Compose with `SwapRootContract` / framework
 * `SwapRootProps` — do not extend the root here so root fields are not applied
 * twice. Content fields stay `unknown` so consumers can narrow them.
 */
export interface SwapContract {
  /** Content shown when swapped off. */
  off?: unknown;
  /** Content shown when swapped on. */
  on?: unknown;
}
