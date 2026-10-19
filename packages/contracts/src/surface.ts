import type { SurfaceRecipeFn, SurfaceVariantProps } from "@pisagor/recipes";

/**
 * Shared Surface root contract: visual variants and recipe override. Used by
 * compound roots; excludes host DOM attributes.
 */
export interface SurfaceRootContract extends SurfaceVariantProps {
  /**
   * Style recipe override.
   *
   * @defaultValue surfaceRecipe
   */
  recipe?: SurfaceRecipeFn;
}
