import type { PopoverRecipeFn, PopoverRecipeSlot } from "@pisagor/recipes";
import type { SlotClassNames } from "./internal";

/**
 * Shared Popover root contract: recipe override. Used by compound roots;
 * excludes host DOM attributes.
 */
export interface PopoverRootContract {
  /**
   * Style recipe override.
   *
   * @defaultValue popoverRecipe
   */
  recipe?: PopoverRecipeFn;
}

/**
 * Popover shorthand content contract. Compose with `PopoverRootContract` /
 * framework `PopoverRootProps` — do not extend the root here so root fields are
 * not applied twice.
 */
export interface PopoverContract {
  /** Per-slot class name overrides. */
  classNames?: SlotClassNames<PopoverRecipeSlot>;
}

/**
 * PopoverHeader shorthand content contract. Content fields stay `unknown` so
 * consumers can narrow them.
 */
export interface PopoverHeaderContract {
  /** Supporting copy. */
  description?: unknown;
  /** Header title. */
  title?: unknown;
}
