import type { FileInputRecipeFn } from "@pisagor/recipes/file-input";

/** FileInput props. */
export interface FileInputProps {
  /**
   * Style recipe override.
   * @defaultValue fileInputRecipe
   */
  recipe?: FileInputRecipeFn;
}
