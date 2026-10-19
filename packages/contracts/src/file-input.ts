import type {
  FileInputRecipeFn,
  FileInputVariantProps,
} from "@pisagor/recipes";

/**
 * Shared FileInput root contract: visual variants and recipe override. Used by
 * compound roots; excludes host DOM attributes.
 */
export interface FileInputRootContract extends FileInputVariantProps {
  /**
   * Style recipe override.
   *
   * @defaultValue fileInputRecipe
   */
  recipe?: FileInputRecipeFn;
}
