import type { ProgressRecipeFn } from "@pisagor/recipes/progress";

/** Progress props. */
export interface ProgressProps {
  /**
   * Style recipe override.
   * @defaultValue progressRecipe
   */
  recipe?: ProgressRecipeFn;
}
