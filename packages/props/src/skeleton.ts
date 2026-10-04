import type { SkeletonRecipeFn } from "@pisagor/recipes";

/** Skeleton props. */
export interface SkeletonProps {
  /**
   * Style recipe override.
   * @defaultValue skeletonRecipe
   */
  recipe?: SkeletonRecipeFn;
}
