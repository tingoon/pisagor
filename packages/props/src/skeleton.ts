import type { SkeletonRecipeFn } from "@pisagor/recipes/skeleton";

/** Skeleton props. */
export interface SkeletonProps {
  /**
   * Style recipe override.
   * @defaultValue skeletonRecipe
   */
  recipe?: SkeletonRecipeFn;
}
