import type {
  FormControlGroupShellVariantProps,
  PasswordInputRecipeFn,
} from "@pisagor/recipes";

/** PasswordInput props. Shell variants from `formControlGroupShellRecipe`. */
export interface PasswordInputProps extends FormControlGroupShellVariantProps {
  /**
   * Style recipe override.
   *
   * @defaultValue passwordInputRecipe
   */
  recipe?: PasswordInputRecipeFn;
}
