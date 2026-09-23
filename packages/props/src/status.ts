import type { StatusRecipeFn, StatusVariantProps } from "@pisagor/recipes/status";

/** Status props. */
export interface StatusProps extends StatusVariantProps {
  /**
   * Style recipe override.
   * @defaultValue statusRecipe
   */
  recipe?: StatusRecipeFn;
}
