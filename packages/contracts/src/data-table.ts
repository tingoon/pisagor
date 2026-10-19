import type { DataTableRecipeFn } from "@pisagor/recipes";

/**
 * Shared DataTable root contract: recipe override. Used by compound roots;
 * excludes host DOM attributes.
 */
export interface DataTableRootContract {
  /**
   * Style recipe override.
   *
   * @defaultValue dataTableRecipe
   */
  recipe?: DataTableRecipeFn;
}

/**
 * DataTableBody shorthand content contract. Content fields stay `unknown` so
 * consumers can narrow them.
 */
export interface DataTableBodyContract {
  /** Empty-state content when there are no rows. */
  empty?: unknown;
}
