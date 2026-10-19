import type {
  FileUploadItemRecipeFn,
  FileUploadRecipeFn,
} from "@pisagor/recipes";

/**
 * Shared FileUpload root contract: recipe override. Used by compound roots;
 * excludes host DOM attributes.
 */
export interface FileUploadRootContract {
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
