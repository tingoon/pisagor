import type {
  SwitchRecipeFn,
  SwitchRecipeSlot,
  SwitchVariantProps,
} from "@pisagor/recipes";
import type { SlotClassNames } from "./internal";

/**
 * Shared Switch root contract: visual variants and recipe override. Used by
 * compound roots; excludes host DOM attributes.
 */
export interface SwitchRootContract extends SwitchVariantProps {
  /**
   * Style recipe override.
   *
   * @defaultValue switchRecipe
   */
  recipe?: SwitchRecipeFn;
}

/**
 * Switch shorthand content contract. Compose with `SwitchRootContract` /
 * framework `SwitchRootProps` — do not extend the root here so root fields are
 * not applied twice.
 */
export interface SwitchContract {
  /** Per-slot class name overrides. */
  classNames?: SlotClassNames<SwitchRecipeSlot>;
}
