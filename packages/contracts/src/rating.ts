import type {
  RatingRecipeFn,
  RatingRecipeSlot,
  RatingVariantProps,
} from "@pisagor/recipes";
import type { SlotClassNames } from "./internal";

/**
 * Shared Rating root contract: visual variants and recipe override. Used by
 * compound roots; excludes host DOM attributes.
 */
export interface RatingRootContract extends RatingVariantProps {
  /**
   * Style recipe override.
   *
   * @defaultValue ratingRecipe
   */
  recipe?: RatingRecipeFn;
}

/**
 * Rating shorthand content contract. Compose with `RatingRootContract` /
 * framework `RatingRootProps` — do not extend the root here so root fields are
 * not applied twice. Content fields stay `unknown` so consumers can narrow
 * them.
 */
export interface RatingContract {
  /** Per-slot class name overrides. */
  classNames?: SlotClassNames<RatingRecipeSlot>;
  /** Custom rating icon. */
  icon?: unknown;
}
