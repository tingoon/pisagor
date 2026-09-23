import type { PasswordInputRecipeFn } from "@pisagor/recipes/password-input";

/** PasswordInput props. */
export interface PasswordInputProps {
  /**
   * Style recipe override.
   * @defaultValue passwordInputRecipe
   */
  recipe?: PasswordInputRecipeFn;
}
