import type {
  SheetRecipeFn,
  SheetRecipeSlot,
  SheetVariantProps,
} from "@pisagor/recipes";
import type { SlotClassNames } from "./internal";

/**
 * Shared Sheet root contract: visual variants and recipe override. Used by
 * compound roots; excludes host DOM attributes.
 */
export interface SheetRootContract extends SheetVariantProps {
  /**
   * Style recipe override.
   *
   * @defaultValue sheetRecipe
   */
  recipe?: SheetRecipeFn;
}

/**
 * Sheet shorthand content contract. Compose with `SheetRootContract` /
 * framework `SheetRootProps` — do not extend the root here so root fields are
 * not applied twice.
 */
export interface SheetContract {
  /** Per-slot class name overrides. */
  classNames?: SlotClassNames<SheetRecipeSlot>;
}
