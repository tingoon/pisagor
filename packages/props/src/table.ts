import type { TableRecipeFn } from "@pisagor/recipes/table";

/** Table props. */
export interface TableProps {
  /**
   * Style recipe override.
   * @defaultValue tableRecipe
   */
  recipe?: TableRecipeFn;
}
