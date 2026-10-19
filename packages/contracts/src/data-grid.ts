import type { DataGridRecipeFn } from "@pisagor/recipes";

/**
 * Shared DataGrid root contract: recipe override. Used by compound roots;
 * excludes host DOM attributes.
 */
export interface DataGridRootContract {
  /**
   * Style recipe override.
   *
   * @defaultValue dataGridRecipe
   */
  recipe?: DataGridRecipeFn;
}

/**
 * DataGridBody shorthand content contract. Content fields stay `unknown` so
 * consumers can narrow them.
 */
export interface DataGridBodyContract {
  /** Empty-state content when there are no rows. */
  empty?: unknown;
}
