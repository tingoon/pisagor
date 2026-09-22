import type { MarqueeRecipeFn } from "@pisagor/recipes/marquee";

/** Marquee props. */
export interface MarqueeProps {
  /**
   * Style recipe override.
   * @defaultValue marqueeRecipe
   */
  recipe?: MarqueeRecipeFn;
}
