import type { CircularProgressRecipeFn } from "@pisagor/recipes";

/** CircularProgress props. */
export interface CircularProgressProps {
  /**
   * Style recipe override.
   * @defaultValue circularProgressRecipe
   */
  recipe?: CircularProgressRecipeFn;
}
