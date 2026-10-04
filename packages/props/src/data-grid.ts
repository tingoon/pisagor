import type { DataGridRecipeFn } from "@pisagor/recipes";

/** DataGrid props. */
export interface DataGridProps {
  /**
   * Style recipe override.
   * @defaultValue dataGridRecipe
   */
  recipe?: DataGridRecipeFn;
}
