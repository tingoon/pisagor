import type { ContextMenuRecipeFn } from "@pisagor/recipes/context-menu";

/** ContextMenu props. */
export interface ContextMenuProps {
  /**
   * Style recipe override.
   * @defaultValue contextMenuRecipe
   */
  recipe?: ContextMenuRecipeFn;
}
