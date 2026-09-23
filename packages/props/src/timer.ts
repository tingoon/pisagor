import type { TimerItemGroupRecipeFn, TimerRecipeFn } from "@pisagor/recipes/timer";

/** Timer props. */
export interface TimerProps {
  /**
   * Style recipe override.
   * @defaultValue timerRecipe
   */
  recipe?: TimerRecipeFn;
}

/** TimerItemGroup props. */
export interface TimerItemGroupProps {
  /**
   * Style recipe override.
   * @defaultValue timerItemGroupRecipe
   */
  recipe?: TimerItemGroupRecipeFn;
}
