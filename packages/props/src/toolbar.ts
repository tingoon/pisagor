import type { ToolbarRecipeFn } from "@pisagor/recipes";

/** Toolbar props. */
export interface ToolbarProps {
  /**
   * Style recipe override.
   * @defaultValue toolbarRecipe
   */
  recipe?: ToolbarRecipeFn;
}
