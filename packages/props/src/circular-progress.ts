import type {
  CircularProgressRecipeFn,
  CircularProgressRecipeSlot,
} from "@pisagor/recipes";
import type { SlotClassNames } from "./internal";

/**
 * Shared CircularProgress root contract: recipe override. Used by compound
 * roots; excludes host DOM attributes.
 */
export interface CircularProgressRootContract {
  /**
   * Style recipe override.
   *
   * @defaultValue circularProgressRecipe
   */
  recipe?: CircularProgressRecipeFn;
}

/**
 * CircularProgress shorthand content contract. Compose with
 * `CircularProgressRootContract` / framework `CircularProgressRootProps` — do
 * not extend the root here so root fields are not applied twice.
 */
export interface CircularProgressContract {
  /** Per-slot class name overrides. */
  classNames?: SlotClassNames<CircularProgressRecipeSlot>;
}
