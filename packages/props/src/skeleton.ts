import type { SkeletonRecipeFn, SkeletonVariantProps } from "@pisagor/recipes";

/** Skeleton props. */
export interface SkeletonProps extends SkeletonVariantProps {
  /**
   * Style recipe override.
   *
   * @defaultValue skeletonRecipe
   */
  recipe?: SkeletonRecipeFn;
}
