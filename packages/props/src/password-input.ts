import type { PasswordInputRecipeFn } from "@pisagor/recipes";

/** PasswordInput props. */
export interface PasswordInputProps {
  /**
   * Style recipe override.
   * @defaultValue passwordInputRecipe
   */
  recipe?: PasswordInputRecipeFn;
}
