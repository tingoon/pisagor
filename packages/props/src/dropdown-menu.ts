import type {
  DropdownMenuItemRecipeFn,
  DropdownMenuItemRecipeSlot,
  DropdownMenuItemVariantProps,
  DropdownMenuRecipeFn,
  DropdownMenuRecipeSlot,
} from "@pisagor/recipes";
import type { SlotClassNames } from "./internal";

/**
 * Shared DropdownMenu root contract: recipe override. Used by compound roots;
 * excludes host DOM attributes.
 */
export interface DropdownMenuRootContract {
  /**
   * Style recipe override.
   *
   * @defaultValue dropdownMenuRecipe
   */
  recipe?: DropdownMenuRecipeFn;
}

/**
 * DropdownMenu shorthand content contract. Compose with
 * `DropdownMenuRootContract` / framework `DropdownMenuRootProps` — do not
 * extend the root here so root fields are not applied twice.
 */
export interface DropdownMenuContract {
  /** Per-slot class name overrides. */
  classNames?: SlotClassNames<DropdownMenuRecipeSlot>;
}

/**
 * Shared DropdownMenuItem root contract: visual variants and recipe override.
 * Used by compound roots; excludes host DOM attributes.
 */
export interface DropdownMenuItemRootContract extends DropdownMenuItemVariantProps {
  /**
   * Style recipe override.
   *
   * @defaultValue dropdownMenuItemRecipe
   */
  recipe?: DropdownMenuItemRecipeFn;
}

/**
 * DropdownMenuItem shorthand content contract. Compose with
 * `DropdownMenuItemRootContract` / framework `DropdownMenuItemRootProps` — do
 * not extend the root here so root fields are not applied twice.
 */
export interface DropdownMenuItemContract {
  /** Per-slot class name overrides. */
  classNames?: SlotClassNames<DropdownMenuItemRecipeSlot>;
}

/**
 * DropdownMenuItemGroup shorthand content contract. Content fields stay
 * `unknown` so consumers can narrow them.
 */
export interface DropdownMenuItemGroupContract {
  /** Group heading. */
  heading?: unknown;
}
