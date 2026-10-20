import type {
  FileUploadItemRecipeFn,
  FileUploadItemRecipeSlot,
  FileUploadRecipeFn,
  FileUploadRecipeSlot,
  FileUploadVariantProps,
} from "@pisagor/recipes";
import type { SlotClassNames } from "./internal";

/**
 * Shared FileUpload root contract: visual variants and recipe override. Used by
 * compound roots; excludes host DOM attributes.
 */
export interface FileUploadRootContract extends FileUploadVariantProps {
  /**
   * Style recipe override.
   *
   * @defaultValue fileUploadRecipe
   */
  recipe?: FileUploadRecipeFn;
}

/**
 * Shared FileUploadItem root contract: recipe override. Used by compound roots;
 * excludes host DOM attributes.
 */
export interface FileUploadItemRootContract {
  /**
   * Style recipe override.
   *
   * @defaultValue fileUploadItemRecipe
   */
  recipe?: FileUploadItemRecipeFn;
}

/**
 * FileUpload shorthand contract. Compose with `FileUploadRootContract` /
 * framework `FileUploadRootProps`.
 */
export interface FileUploadContract {
  /** Per-slot class name overrides. */
  classNames?: SlotClassNames<FileUploadRecipeSlot>;
  /** Per-slot class name overrides for each file in the list. */
  itemClassNames?: SlotClassNames<FileUploadItemRecipeSlot>;
}
