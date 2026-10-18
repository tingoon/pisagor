import type { SeparatorRecipeFn } from "@pisagor/recipes";

/**
 * Shared Separator root contract: recipe override. Used by compound roots;
 * excludes host DOM attributes.
 */
export interface SeparatorRootContract {
  /**
   * Style recipe override.
   *
   * @defaultValue separatorRecipe
   */
  recipe?: SeparatorRecipeFn;
}
