import type {
  SwitchRecipeFn,
  SwitchVariantProps,
} from "@pisagor/recipes/switch";

/** Switch props. */
export interface SwitchProps extends SwitchVariantProps {
  /**
   * Style recipe override.
   * @defaultValue switchRecipe
   */
  recipe?: SwitchRecipeFn;
}
