import type { JsonTreeViewRecipeFn } from "@pisagor/recipes/json-tree-view";

/** JsonTreeView props. */
export interface JsonTreeViewProps {
  /**
   * Style recipe override.
   * @defaultValue jsonTreeViewRecipe
   */
  recipe?: JsonTreeViewRecipeFn;
}
