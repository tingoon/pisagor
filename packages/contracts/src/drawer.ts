import type {
  DrawerRecipeFn,
  DrawerRecipeSlot,
  DrawerVariantProps,
} from "@pisagor/recipes";
import type { SlotClassNames } from "./internal";

/**
 * Shared Drawer root contract: visual variants and recipe override. Used by
 * compound roots; excludes host DOM attributes.
 */
export interface DrawerRootContract extends DrawerVariantProps {
  /**
   * Style recipe override.
   *
   * @defaultValue drawerRecipe
   */
  recipe?: DrawerRecipeFn;
}

/**
 * Drawer shorthand content contract. Compose with `DrawerRootContract` /
 * framework `DrawerRootProps` — do not extend the root here so root fields are
 * not applied twice.
 */
export interface DrawerContract {
  /** Per-slot class name overrides. */
  classNames?: SlotClassNames<DrawerRecipeSlot>;
}

/**
 * DrawerHeader shorthand content contract. Content fields stay `unknown` so
 * consumers can narrow them.
 */
export interface DrawerHeaderContract {
  /** Supporting copy. */
  description?: unknown;
  /** Header title. */
  title?: unknown;
}
