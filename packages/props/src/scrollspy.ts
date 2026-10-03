import type { ScrollspyRecipeFn } from "@pisagor/recipes/scrollspy";

/** Scrollspy props. */
export interface ScrollspyProps {
  /**
   * Style recipe override.
   * @defaultValue scrollspyRecipe
   */
  recipe?: ScrollspyRecipeFn;
}
