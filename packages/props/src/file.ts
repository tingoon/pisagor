import type { FileRecipeFn, FileVariantProps } from "@pisagor/recipes";

/** File props. */
export interface FileProps extends FileVariantProps {
  /**
   * Style recipe override.
   * @defaultValue fileRecipe
   */
  recipe?: FileRecipeFn;
}
