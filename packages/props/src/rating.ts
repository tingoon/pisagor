import type { RatingRecipeFn, RatingVariantProps } from "@pisagor/recipes";

/** Rating props. */
export interface RatingProps extends RatingVariantProps {
  /**
   * Style recipe override.
   *
   * @defaultValue ratingRecipe
   */
  recipe?: RatingRecipeFn;
}
