import type {
  CheckboxGroupRecipeFn,
  CheckboxRecipeFn,
  FormControlToggleVariantProps,
} from "@pisagor/recipes";

/**
 * Shared CheckboxGroup root contract: recipe override. Used by compound roots;
 * excludes host DOM attributes.
 */
export interface CheckboxGroupRootContract {
  /**
   * Style recipe override.
   *
   * @defaultValue checkboxGroupRecipe
   */
  recipe?: CheckboxGroupRecipeFn;
}

/**
 * Shared Checkbox root contract: shell variants from `formControlToggleRecipe`
 * and recipe override. Used by compound roots; excludes host DOM attributes.
 */
export interface CheckboxRootContract extends FormControlToggleVariantProps {
  /**
   * Style recipe override.
   *
   * @defaultValue checkboxRecipe
   */
  recipe?: CheckboxRecipeFn;
}
