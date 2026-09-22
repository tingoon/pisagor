import type { ToolbarRecipeFn } from "@pisagor/recipes/toolbar";

/** Toolbar props. */
export interface ToolbarProps {
  /**
   * Style recipe override.
   * @defaultValue toolbarRecipe
   */
  recipe?: ToolbarRecipeFn;
}
