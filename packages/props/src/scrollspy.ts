import type { ScrollspyRecipeFn } from "@pisagor/recipes";

/** Scrollspy props. */
export interface ScrollspyProps {
  /**
   * Style recipe override.
   * @defaultValue scrollspyRecipe
   */
  recipe?: ScrollspyRecipeFn;
}
