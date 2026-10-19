import type { TourRecipeFn } from "@pisagor/recipes";

/**
 * Shared Tour root contract: recipe override. Used by compound roots; excludes
 * host DOM attributes.
 */
export interface TourRootContract {
  /**
   * Style recipe override.
   *
   * @defaultValue tourRecipe
   */
  recipe?: TourRecipeFn;
}
