import type { VisuallyHiddenRecipeFn } from "@pisagor/recipes/visually-hidden";

/** VisuallyHidden props. */
export interface VisuallyHiddenProps {
  /**
   * Style recipe override.
   * @defaultValue visuallyHiddenRecipe
   */
  recipe?: VisuallyHiddenRecipeFn;
}
