import type { CircularSliderRecipeFn } from "@pisagor/recipes/circular-slider";

/** CircularSlider props. */
export interface CircularSliderProps {
  /**
   * Style recipe override.
   * @defaultValue circularSliderRecipe
   */
  recipe?: CircularSliderRecipeFn;
}
