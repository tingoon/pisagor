import type { StatusRecipeFn, StatusVariantProps } from "@pisagor/recipes";

/** Status props. */
export interface StatusProps extends StatusVariantProps {
  /**
   * Style recipe override.
   * @defaultValue statusRecipe
   */
  recipe?: StatusRecipeFn;
}
