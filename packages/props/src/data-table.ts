import type { DataTableRecipeFn } from "@pisagor/recipes/data-table";

/** DataTable props. */
export interface DataTableProps {
  /**
   * Style recipe override.
   * @defaultValue dataTableRecipe
   */
  recipe?: DataTableRecipeFn;
}
