import type {
  NumberInputRecipeFn,
  NumberInputVariantProps,
} from "@pisagor/recipes";

/**
 * Shared NumberInput root contract: visual variants and recipe override. Used
 * by compound roots; excludes host DOM attributes.
 */
export interface NumberInputRootContract extends NumberInputVariantProps {
  /**
   * Style recipe override.
   *
   * @defaultValue numberInputRecipe
   */
  recipe?: NumberInputRecipeFn;
}
