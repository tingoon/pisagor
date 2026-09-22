import type { CircularProgressRecipeFn } from "@pisagor/recipes/circular-progress";

/** CircularProgress props. */
export interface CircularProgressProps {
  /**
   * Style recipe override.
   * @defaultValue circularProgressRecipe
   */
  recipe?: CircularProgressRecipeFn;
}
