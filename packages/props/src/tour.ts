import type { TourRecipeFn } from "@pisagor/recipes/tour";

/** Tour props. */
export interface TourProps {
  /**
   * Style recipe override.
   * @defaultValue tourRecipe
   */
  recipe?: TourRecipeFn;
}
