import type { ImageCropperRecipeFn } from "@pisagor/recipes/image-cropper";

/** ImageCropper props. */
export interface ImageCropperProps {
  /**
   * Style recipe override.
   * @defaultValue imageCropperRecipe
   */
  recipe?: ImageCropperRecipeFn;
}
