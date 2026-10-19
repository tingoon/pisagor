import type { SkeletonRecipeFn, SkeletonVariantProps } from "@pisagor/recipes";

/**
 * Shared Skeleton root contract: visual variants and recipe override. Used by
 * compound roots; excludes host DOM attributes.
 */
export interface SkeletonRootContract extends SkeletonVariantProps {
  /**
   * Style recipe override.
   *
   * @defaultValue skeletonRecipe
   */
  recipe?: SkeletonRecipeFn;
}
