import type { FileInputRecipeFn } from "@pisagor/recipes";

/**
 * Shared FileInput root contract: recipe override. Used by compound roots;
 * excludes host DOM attributes.
 */
export interface FileInputRootContract {
  /**
   * Style recipe override.
   *
   * @defaultValue fileInputRecipe
   */
  recipe?: FileInputRecipeFn;
}
