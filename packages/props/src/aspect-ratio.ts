import type { AspectRatioRecipeFn } from "@pisagor/recipes";

/** AspectRatio props. */
export interface AspectRatioProps {
  /**
   * Style recipe override.
   * @defaultValue aspectRatioRecipe
   */
  recipe?: AspectRatioRecipeFn;
}
