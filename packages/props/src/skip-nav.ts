import type { SkipNavRecipeFn } from "@pisagor/recipes";

/** SkipNav props. */
export interface SkipNavProps {
  /**
   * Style recipe override.
   * @defaultValue skipNavRecipe
   */
  recipe?: SkipNavRecipeFn;
}
