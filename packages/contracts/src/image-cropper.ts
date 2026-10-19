import type {
  ImageCropperRecipeFn,
  ImageCropperRecipeSlot,
} from "@pisagor/recipes";
import type { SlotClassNames } from "./internal";

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

/**
 * ImageCropper shorthand contract. Compose with `ImageCropperRootContract` /
 * framework `ImageCropperRootProps`.
 */
export interface ImageCropperContract {
  /** Per-slot class name overrides. */
  classNames?: SlotClassNames<ImageCropperRecipeSlot>;
}
