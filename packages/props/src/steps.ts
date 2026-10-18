import type { StepsItemRecipeFn, StepsRecipeFn } from "@pisagor/recipes";

/**
 * Shared Steps root contract: recipe override. Used by compound roots; excludes
 * host DOM attributes.
 */
export interface StepsRootContract {
  /**
   * Style recipe override.
   *
   * @defaultValue stepsRecipe
   */
  recipe?: StepsRecipeFn;
}

/**
 * Shared StepsItem root contract: recipe override. Used by compound roots;
 * excludes host DOM attributes.
 */
export interface StepsItemRootContract {
  /**
   * Style recipe override.
   *
   * @defaultValue stepsItemRecipe
   */
  recipe?: StepsItemRecipeFn;
}
