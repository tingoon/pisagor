import type { VisuallyHiddenRecipeFn } from "@pisagor/recipes";

/** VisuallyHidden props. */
export interface VisuallyHiddenProps {
  /**
   * Style recipe override.
   * @defaultValue visuallyHiddenRecipe
   */
  recipe?: VisuallyHiddenRecipeFn;
}
