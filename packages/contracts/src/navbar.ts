import type { NavbarRecipeFn, NavbarRecipeSlot } from "@pisagor/recipes";
import type { SlotClassNames } from "./internal";

/**
 * Shared Navbar root contract: recipe override. Used by compound roots;
 * excludes host DOM attributes.
 */
export interface NavbarRootContract {
  /**
   * Style recipe override.
   *
   * @defaultValue navbarRecipe
   */
  recipe?: NavbarRecipeFn;
}

/**
 * Navbar shorthand content contract. Compose with `NavbarRootContract` /
 * framework `NavbarRootProps` — do not extend the root here so root fields are
 * not applied twice.
 */
export interface NavbarContract {
  /** Per-slot class name overrides. */
  classNames?: SlotClassNames<NavbarRecipeSlot>;
}
