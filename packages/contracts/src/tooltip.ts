import type { TooltipRecipeFn, TooltipRecipeSlot } from "@pisagor/recipes";
import type { SlotClassNames } from "./internal";

/**
 * Shared Tooltip root contract: recipe override. Used by compound roots;
 * excludes host DOM attributes.
 */
export interface TooltipRootContract {
  /**
   * Style recipe override.
   *
   * @defaultValue tooltipRecipe
   */
  recipe?: TooltipRecipeFn;
}

/**
 * Tooltip shorthand content contract. Compose with `TooltipRootContract` /
 * framework `TooltipRootProps` — do not extend the root here so root fields are
 * not applied twice. Content fields stay `unknown` so consumers can narrow
 * them.
 */
export interface TooltipContract {
  /** Per-slot class name overrides. */
  classNames?: SlotClassNames<TooltipRecipeSlot>;
  /** Tooltip body content. */
  content: unknown;
}
