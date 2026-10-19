import type { ToggleRecipeFn, ToggleVariantProps } from "@pisagor/recipes";

/**
 * Shared Toggle root contract: visual variants and recipe override. Used by
 * compound roots; excludes host DOM attributes.
 */
export interface ToggleRootContract extends ToggleVariantProps {
  /**
   * Style recipe override.
   *
   * @defaultValue toggleRecipe
   */
  recipe?: ToggleRecipeFn;
}
