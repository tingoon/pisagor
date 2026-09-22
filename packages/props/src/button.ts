import type { ButtonRecipeFn, ButtonVariantProps } from "@pisagor/recipes/button";

/**
 * Button props (`variant`, `size`, `pill`, `loading`, `clickEffect`).
 */
export interface ButtonProps extends ButtonVariantProps {
  /**
   * Style recipe override.
   * @defaultValue buttonRecipe
   */
  recipe?: ButtonRecipeFn;
}
