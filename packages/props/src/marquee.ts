import type { MarqueeRecipeFn } from "@pisagor/recipes";

/** Marquee props. */
export interface MarqueeProps {
  /**
   * Style recipe override.
   * @defaultValue marqueeRecipe
   */
  recipe?: MarqueeRecipeFn;
}
