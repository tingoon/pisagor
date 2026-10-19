import type { ButtonRecipeFn, ButtonVariantProps } from "@pisagor/recipes";

/**
 * Shared Button root contract: visual variants and recipe override. Used by
 * compound roots; excludes host DOM attributes.
 */
export interface ButtonRootContract extends ButtonVariantProps {
  /**
   * Style recipe override.
   *
   * @defaultValue buttonRecipe
   */
  recipe?: ButtonRecipeFn;
}
