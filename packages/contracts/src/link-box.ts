import type { LinkBoxRecipeFn } from "@pisagor/recipes";

/**
 * Shared LinkBox root contract: recipe override. Used by compound roots;
 * excludes host DOM attributes.
 */
export interface LinkBoxRootContract {
  /**
   * Style recipe override.
   *
   * @defaultValue linkBoxRecipe
   */
  recipe?: LinkBoxRecipeFn;
}
