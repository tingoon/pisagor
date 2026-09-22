import type { HighlightRecipeFn } from "@pisagor/recipes/highlight";

/** Highlight props. */
export interface HighlightProps {
  /**
   * Style recipe override.
   * @defaultValue highlightRecipe
   */
  recipe?: HighlightRecipeFn;
}
