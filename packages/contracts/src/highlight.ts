import type { HighlightRecipeFn } from "@pisagor/recipes";

/**
 * Shared Highlight root contract: recipe override. Used by compound roots;
 * excludes host DOM attributes.
 */
export interface HighlightRootContract {
  /**
   * Style recipe override.
   *
   * @defaultValue highlightRecipe
   */
  recipe?: HighlightRecipeFn;
}
