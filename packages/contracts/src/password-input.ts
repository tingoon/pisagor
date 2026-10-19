import type {
  FormControlGroupShellVariantProps,
  PasswordInputRecipeFn,
} from "@pisagor/recipes";

/**
 * Shared PasswordInput root contract: visual variants and recipe override.
 * Shell variants from `formControlGroupShellRecipe`. Used by compound roots;
 * excludes host DOM attributes.
 */
export interface PasswordInputRootContract extends FormControlGroupShellVariantProps {
  /**
   * Style recipe override.
   *
   * @defaultValue passwordInputRecipe
   */
  recipe?: PasswordInputRecipeFn;
}
