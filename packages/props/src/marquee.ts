import type { MarqueeRecipeFn, MarqueeRecipeSlot } from "@pisagor/recipes";
import type { SlotClassNames } from "./internal";

/**
 * Shared Marquee root contract: recipe override. Used by compound roots;
 * excludes host DOM attributes.
 */
export interface MarqueeRootContract {
  /**
   * Style recipe override.
   *
   * @defaultValue marqueeRecipe
   */
  recipe?: MarqueeRecipeFn;
}

/**
 * Marquee shorthand content contract. Compose with `MarqueeRootContract` /
 * framework `MarqueeRootProps` — do not extend the root here so root fields are
 * not applied twice. Content fields stay `unknown` so consumers can narrow
 * them.
 */
export interface MarqueeContract {
  /** Per-slot class name overrides. */
  classNames?: SlotClassNames<MarqueeRecipeSlot>;
  /** Content items rendered in the marquee track. */
  items?: unknown[];
}
