import type {
  FileUploadItemRecipeFn,
  FileUploadRecipeFn,
} from "@pisagor/recipes";

/** FileUpload props. */
export interface FileUploadProps {
  /**
   * Style recipe override.
   * @defaultValue fileUploadRecipe
   */
  recipe?: FileUploadRecipeFn;
}

/** FileUploadItem props. */
export interface FileUploadItemProps {
  /**
   * Style recipe override.
   * @defaultValue fileUploadItemRecipe
   */
  recipe?: FileUploadItemRecipeFn;
}
