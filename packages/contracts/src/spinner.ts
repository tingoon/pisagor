import type { SpinnerRecipeFn } from "@pisagor/recipes";

/**
 * Shared Spinner root contract: recipe override. Used by compound roots;
 * excludes host DOM attributes.
 */
export interface SpinnerRootContract {
  /**
   * Style recipe override.
   *
   * @defaultValue spinnerRecipe
   */
  recipe?: SpinnerRecipeFn;
}
