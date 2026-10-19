import type {
  ScrollAreaRecipeFn,
  ScrollAreaRecipeSlot,
  ScrollAreaVariantProps,
} from "@pisagor/recipes";
import type { SlotClassNames } from "./internal";

/**
 * Shared ScrollArea root contract: visual variants and recipe override. Used by
 * compound roots; excludes host DOM attributes.
 */
export interface ScrollAreaRootContract extends ScrollAreaVariantProps {
  /**
   * Style recipe override.
   *
   * @defaultValue scrollAreaRecipe
   */
  recipe?: ScrollAreaRecipeFn;
}

/**
 * ScrollArea shorthand content contract. Compose with `ScrollAreaRootContract`
 * / framework `ScrollAreaRootProps` — do not extend the root here so root
 * fields are not applied twice.
 */
export interface ScrollAreaContract {
  /** Per-slot class name overrides. */
  classNames?: SlotClassNames<ScrollAreaRecipeSlot>;
}
