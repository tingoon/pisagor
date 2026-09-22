import type { SkipNavRecipeFn } from "@pisagor/recipes/skip-nav";

/** SkipNav props. */
export interface SkipNavProps {
  /**
   * Style recipe override.
   * @defaultValue skipNavRecipe
   */
  recipe?: SkipNavRecipeFn;
}
