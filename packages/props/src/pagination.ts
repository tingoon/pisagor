import type { PaginationRecipeFn } from "@pisagor/recipes";

/**
 * Shared Pagination root contract: recipe override. Used by compound roots;
 * excludes host DOM attributes.
 */
export interface PaginationRootContract {
  /**
   * Style recipe override.
   *
   * @defaultValue paginationRecipe
   */
  recipe?: PaginationRecipeFn;
}
