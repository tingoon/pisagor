import type { PaginationRecipeFn } from "@pisagor/recipes/pagination";

/** Pagination props. */
export interface PaginationProps {
  /**
   * Style recipe override.
   * @defaultValue paginationRecipe
   */
  recipe?: PaginationRecipeFn;
}
