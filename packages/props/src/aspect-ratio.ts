import type { AspectRatioRecipeFn } from "@pisagor/recipes/aspect-ratio";

/** AspectRatio props. */
export interface AspectRatioProps {
  /**
   * Style recipe override.
   * @defaultValue aspectRatioRecipe
   */
  recipe?: AspectRatioRecipeFn;
}
