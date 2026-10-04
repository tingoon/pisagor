import type { DataTableRecipeFn } from "@pisagor/recipes";

/** DataTable props. */
export interface DataTableProps {
  /**
   * Style recipe override.
   * @defaultValue dataTableRecipe
   */
  recipe?: DataTableRecipeFn;
}
