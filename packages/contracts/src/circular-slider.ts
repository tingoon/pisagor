import type { CircularSliderRecipeFn } from "@pisagor/recipes";

/**
 * Shared CircularSlider root contract: recipe override. Used by compound roots;
 * excludes host DOM attributes.
 */
export interface CircularSliderRootContract {
  /**
   * Style recipe override.
   *
   * @defaultValue circularSliderRecipe
   */
  recipe?: CircularSliderRecipeFn;
}
