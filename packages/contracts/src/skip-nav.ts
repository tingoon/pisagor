import type { SkipNavRecipeFn } from "@pisagor/recipes";

/**
 * Shared SkipNav root contract: recipe override. Used by compound roots;
 * excludes host DOM attributes.
 */
export interface SkipNavRootContract {
  /**
   * Style recipe override.
   *
   * @defaultValue skipNavRecipe
   */
  recipe?: SkipNavRecipeFn;
}
