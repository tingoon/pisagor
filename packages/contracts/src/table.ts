import type { TableRecipeFn, TableVariantProps } from "@pisagor/recipes";

/**
 * Shared Table root contract: visual variants and recipe override. Used by
 * compound roots; excludes host DOM attributes.
 */
export interface TableRootContract extends TableVariantProps {
  /**
   * Style recipe override.
   *
   * @defaultValue tableRecipe
   */
  recipe?: TableRecipeFn;
}
