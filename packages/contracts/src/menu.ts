import type {
  MenuItemRecipeFn,
  MenuItemVariantProps,
  MenuRecipeFn,
  MenuRecipeSlot,
} from "@pisagor/recipes";
import type { SlotClassNames } from "./internal";

/**
 * Shared Menu root contract: recipe override. Used by compound roots; excludes
 * host DOM attributes.
 */
export interface MenuRootContract {
  /**
   * Style recipe override.
   *
   * @defaultValue menuRecipe
   */
  recipe?: MenuRecipeFn;
}

/**
 * Menu shorthand content contract. Compose with `MenuRootContract` / framework
 * `MenuRootProps` — do not extend the root here so root fields are not applied
 * twice.
 */
export interface MenuContract {
  /** Per-slot class name overrides. */
  classNames?: SlotClassNames<MenuRecipeSlot>;
}

/**
 * Shared MenuItem root contract: visual variants and recipe override. Used by
 * compound roots; excludes host DOM attributes.
 */
export interface MenuItemRootContract extends MenuItemVariantProps {
  /**
   * Style recipe override.
   *
   * @defaultValue menuItemRecipe
   */
  recipe?: MenuItemRecipeFn;
}
