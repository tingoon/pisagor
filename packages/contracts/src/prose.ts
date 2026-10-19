import type { ProseRecipeFn } from "@pisagor/recipes";

/**
 * Shared Prose root contract: recipe override. Used by compound roots; excludes
 * host DOM attributes.
 */
export interface ProseRootContract {
  /**
   * Style recipe override.
   *
   * @defaultValue proseRecipe
   */
  recipe?: ProseRecipeFn;
}
