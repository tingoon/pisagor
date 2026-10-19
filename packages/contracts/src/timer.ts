import type { TimerItemGroupRecipeFn, TimerRecipeFn } from "@pisagor/recipes";

/**
 * Shared Timer root contract: recipe override. Used by compound roots; excludes
 * host DOM attributes.
 */
export interface TimerRootContract {
  /**
   * Style recipe override.
   *
   * @defaultValue timerRecipe
   */
  recipe?: TimerRecipeFn;
}

/**
 * Shared TimerItemGroup root contract: recipe override. Used by compound roots;
 * excludes host DOM attributes.
 */
export interface TimerItemGroupRootContract {
  /**
   * Style recipe override.
   *
   * @defaultValue timerItemGroupRecipe
   */
  recipe?: TimerItemGroupRecipeFn;
}
