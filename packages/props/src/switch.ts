import type { SwitchRecipeFn, SwitchVariantProps } from "@pisagor/recipes";

/** Switch props. */
export interface SwitchProps extends SwitchVariantProps {
  /**
   * Style recipe override.
   * @defaultValue switchRecipe
   */
  recipe?: SwitchRecipeFn;
}
