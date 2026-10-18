import type { VisuallyHiddenRecipeFn } from "@pisagor/recipes";

/**
 * Shared VisuallyHidden root contract: recipe override. Used by compound roots;
 * excludes host DOM attributes.
 */
export interface VisuallyHiddenRootContract {
  /**
   * Style recipe override.
   *
   * @defaultValue visuallyHiddenRecipe
   */
  recipe?: VisuallyHiddenRecipeFn;
}
