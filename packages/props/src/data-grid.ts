import type { DataGridRecipeFn } from "@pisagor/recipes/data-grid";

/** DataGrid props. */
export interface DataGridProps {
  /**
   * Style recipe override.
   * @defaultValue dataGridRecipe
   */
  recipe?: DataGridRecipeFn;
}
