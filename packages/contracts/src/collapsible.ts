import type { CollapsibleRecipeFn } from "@pisagor/recipes";

/**
 * Shared Collapsible root contract: recipe override. Used by compound roots;
 * excludes host DOM attributes.
 */
export interface CollapsibleRootContract {
  /**
   * Style recipe override.
   *
   * @defaultValue collapsibleRecipe
   */
  recipe?: CollapsibleRecipeFn;
}
