import type { ContextMenuRecipeFn } from "@pisagor/recipes";

/**
 * Shared ContextMenu root contract: recipe override. Used by compound roots;
 * excludes host DOM attributes.
 */
export interface ContextMenuRootContract {
  /**
   * Style recipe override.
   *
   * @defaultValue contextMenuRecipe
   */
  recipe?: ContextMenuRecipeFn;
}
