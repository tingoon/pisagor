import type { ImageCropperRecipeFn } from "@pisagor/recipes";

/** ImageCropper props. */
export interface ImageCropperProps {
  /**
   * Style recipe override.
   * @defaultValue imageCropperRecipe
   */
  recipe?: ImageCropperRecipeFn;
}
