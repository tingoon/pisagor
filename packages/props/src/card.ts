import type { CardRecipeFn, CardVariantProps } from "@pisagor/recipes/card";

/** Card props. */
export interface CardProps extends CardVariantProps {
  /**
   * Style recipe override.
   * @defaultValue cardRecipe
   */
  recipe?: CardRecipeFn;
}
