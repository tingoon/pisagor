import type { RatingRecipeFn } from "@pisagor/recipes";

/** Rating props. */
export interface RatingProps {
  /**
   * Style recipe override.
   * @defaultValue ratingRecipe
   */
  recipe?: RatingRecipeFn;
}
