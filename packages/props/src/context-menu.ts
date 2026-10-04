import type { ContextMenuRecipeFn } from "@pisagor/recipes";

/** ContextMenu props. */
export interface ContextMenuProps {
  /**
   * Style recipe override.
   * @defaultValue contextMenuRecipe
   */
  recipe?: ContextMenuRecipeFn;
}
