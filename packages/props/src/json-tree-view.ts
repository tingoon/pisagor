import type { JsonTreeViewRecipeFn } from "@pisagor/recipes";

/** JsonTreeView props. */
export interface JsonTreeViewProps {
  /**
   * Style recipe override.
   * @defaultValue jsonTreeViewRecipe
   */
  recipe?: JsonTreeViewRecipeFn;
}
