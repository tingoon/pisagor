import type { TourRecipeFn } from "@pisagor/recipes";

/** Tour props. */
export interface TourProps {
  /**
   * Style recipe override.
   * @defaultValue tourRecipe
   */
  recipe?: TourRecipeFn;
}
