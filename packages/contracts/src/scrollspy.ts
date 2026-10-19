import type { ScrollspyRecipeFn } from "@pisagor/recipes";

/**
 * Shared Scrollspy root contract: recipe override. Used by compound roots;
 * excludes host DOM attributes.
 */
export interface ScrollspyRootContract {
  /**
   * Style recipe override.
   *
   * @defaultValue scrollspyRecipe
   */
  recipe?: ScrollspyRecipeFn;
}
