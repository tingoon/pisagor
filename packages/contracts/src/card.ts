import type {
  CardRecipeFn,
  CardRecipeSlot,
  CardVariantProps,
} from "@pisagor/recipes";
import type { SlotClassNames } from "./internal";

/**
 * Shared Card root contract: visual variants and recipe override. Used by
 * compound roots; excludes host DOM attributes.
 */
export interface CardRootContract extends CardVariantProps {
  /**
   * Style recipe override.
   *
   * @defaultValue cardRecipe
   */
  recipe?: CardRecipeFn;
}

/**
 * Card shorthand content contract. Compose with `CardRootContract` / framework
 * `CardRootProps` — do not extend the root here so root fields are not applied
 * twice.
 */
export interface CardContract {
  /** Per-slot class name overrides. */
  classNames?: SlotClassNames<CardRecipeSlot>;
}

/**
 * CardHeader shorthand content contract. Content fields stay `unknown` so
 * consumers can narrow them.
 */
export interface CardHeaderContract {
  /** Supporting copy below the title. */
  description?: unknown;
  /** Header title. */
  title?: unknown;
}
