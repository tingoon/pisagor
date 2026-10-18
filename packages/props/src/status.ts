import type { StatusRecipeFn, StatusVariantProps } from "@pisagor/recipes";

/**
 * Shared Status root contract: visual variants and recipe override. Used by
 * compound roots; excludes host DOM attributes.
 */
export interface StatusRootContract extends StatusVariantProps {
  /**
   * Style recipe override.
   *
   * @defaultValue statusRecipe
   */
  recipe?: StatusRecipeFn;
}
