import type { ProgressRecipeFn, ProgressRecipeSlot } from "@pisagor/recipes";
import type { SlotClassNames } from "./internal";

/**
 * Shared Progress root contract: recipe override. Used by compound roots;
 * excludes host DOM attributes.
 */
export interface ProgressRootContract {
  /**
   * Style recipe override.
   *
   * @defaultValue progressRecipe
   */
  recipe?: ProgressRecipeFn;
}

/**
 * Progress shorthand content contract. Compose with `ProgressRootContract` /
 * framework `ProgressRootProps` — do not extend the root here so root fields
 * are not applied twice. Content fields stay `unknown` so consumers can narrow
 * them.
 */
export interface ProgressContract {
  /** Per-slot class name overrides. */
  classNames?: SlotClassNames<ProgressRecipeSlot>;
  /** Optional label shown with the progress control. */
  label?: unknown;
}
