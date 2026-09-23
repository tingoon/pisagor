import type { AlertRecipeFn, AlertVariantProps } from "@pisagor/recipes/alert";

/** Alert props. */
export interface AlertProps extends AlertVariantProps {
  /**
   * Style recipe override.
   * @defaultValue alertRecipe
   */
  recipe?: AlertRecipeFn;
}
