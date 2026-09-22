import type { SliderRecipeFn } from "@pisagor/recipes/slider";

/** Slider props. */
export interface SliderProps {
  /**
   * Style recipe override.
   * @defaultValue sliderRecipe
   */
  recipe?: SliderRecipeFn;
}
