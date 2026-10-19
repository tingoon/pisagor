import type {
  TimerItemGroupRecipeFn,
  TimerRecipeFn,
  TimerRecipeSlot,
} from "@pisagor/recipes";
import type { SlotClassNames } from "./internal";

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

/**
 * Timer shorthand contract. Compose with `TimerRootContract` / framework
 * `TimerRootProps`.
 */
export interface TimerContract {
  /** Per-slot class name overrides. */
  classNames?: SlotClassNames<TimerRecipeSlot>;
}
