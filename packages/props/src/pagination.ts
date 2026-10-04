import type { PaginationRecipeFn } from "@pisagor/recipes";

/** Pagination props. */
export interface PaginationProps {
  /**
   * Style recipe override.
   * @defaultValue paginationRecipe
   */
  recipe?: PaginationRecipeFn;
}
