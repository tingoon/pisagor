import type { HoverCardRecipeFn, HoverCardRecipeSlot } from "@pisagor/recipes";
import type { SlotClassNames } from "./internal";

/**
 * Shared HoverCard root contract: recipe override. Used by compound roots;
 * excludes host DOM attributes.
 */
export interface HoverCardRootContract {
  /**
   * Style recipe override.
   *
   * @defaultValue hoverCardRecipe
   */
  recipe?: HoverCardRecipeFn;
}

/**
 * HoverCard shorthand contract. Compose with `HoverCardRootContract` /
 * framework `HoverCardRootProps`.
 */
export interface HoverCardContract {
  /** Per-slot class name overrides. */
  classNames?: SlotClassNames<HoverCardRecipeSlot>;
}
