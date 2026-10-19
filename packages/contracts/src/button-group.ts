import type {
  ButtonGroupRecipeFn,
  ButtonGroupVariantProps,
} from "@pisagor/recipes";

/**
 * Shared ButtonGroup root contract: visual variants and recipe override. Used
 * by compound roots; excludes host DOM attributes.
 */
export interface ButtonGroupRootContract extends ButtonGroupVariantProps {
  /**
   * Style recipe override.
   *
   * @defaultValue buttonGroupRecipe
   */
  recipe?: ButtonGroupRecipeFn;
}
