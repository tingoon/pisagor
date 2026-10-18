import type { ImageCropperRecipeFn } from "@pisagor/recipes";

/**
 * Shared ImageCropper root contract: recipe override. Used by compound roots;
 * excludes host DOM attributes.
 */
export interface ImageCropperRootContract {
  /**
   * Style recipe override.
   *
   * @defaultValue imageCropperRecipe
   */
  recipe?: ImageCropperRecipeFn;
}
