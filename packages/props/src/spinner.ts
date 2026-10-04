import type { SpinnerRecipeFn } from "@pisagor/recipes";

/** Spinner props. */
export interface SpinnerProps {
  /**
   * Style recipe override.
   * @defaultValue spinnerRecipe
   */
  recipe?: SpinnerRecipeFn;
}
