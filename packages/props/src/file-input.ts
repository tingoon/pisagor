import type { FileInputRecipeFn } from "@pisagor/recipes";

/** FileInput props. */
export interface FileInputProps {
  /**
   * Style recipe override.
   * @defaultValue fileInputRecipe
   */
  recipe?: FileInputRecipeFn;
}
