import type { FrameRecipeFn, FrameVariantProps } from "@pisagor/recipes";

/**
 * Shared Frame root contract: visual variants and recipe override. Used by
 * compound roots; excludes host DOM attributes.
 */
export interface FrameRootContract extends FrameVariantProps {
  /**
   * Style recipe override.
   *
   * @defaultValue frameRecipe
   */
  recipe?: FrameRecipeFn;
}
