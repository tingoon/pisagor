import type {
  NavigationMenuRecipeFn,
  NavigationMenuRecipeSlot,
} from "@pisagor/recipes";
import type { SlotClassNames } from "./internal";

/**
 * Shared NavigationMenu root contract: recipe override. Used by compound roots;
 * excludes host DOM attributes.
 */
export interface NavigationMenuRootContract {
  /**
   * Style recipe override.
   *
   * @defaultValue navigationMenuRecipe
   */
  recipe?: NavigationMenuRecipeFn;
}

/**
 * NavigationMenu shorthand content contract. Compose with
 * `NavigationMenuRootContract` / framework `NavigationMenuRootProps` — do not
 * extend the root here so root fields are not applied twice.
 */
export interface NavigationMenuContract {
  /** Per-slot class name overrides. */
  classNames?: SlotClassNames<NavigationMenuRecipeSlot>;
}
