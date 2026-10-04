import type { ProgressRecipeFn } from "@pisagor/recipes";

/** Progress props. */
export interface ProgressProps {
  /**
   * Style recipe override.
   * @defaultValue progressRecipe
   */
  recipe?: ProgressRecipeFn;
}
