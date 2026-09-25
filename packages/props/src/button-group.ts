import type {
  ButtonGroupRecipeFn,
  ButtonGroupVariantProps,
} from "@pisagor/recipes/button-group";

/** ButtonGroup props. */
export interface ButtonGroupProps extends ButtonGroupVariantProps {
  /**
   * Style recipe override.
   * @defaultValue buttonGroupRecipe
   */
  recipe?: ButtonGroupRecipeFn;
}
