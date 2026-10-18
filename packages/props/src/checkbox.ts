import type {
  CheckboxGroupRecipeFn,
  CheckboxRecipeFn,
  FormControlToggleVariantProps,
} from "@pisagor/recipes";

/** CheckboxGroup props. */
export interface CheckboxGroupProps {
  /**
   * Style recipe override.
   *
   * @defaultValue checkboxGroupRecipe
   */
  recipe?: CheckboxGroupRecipeFn;
}

/** Checkbox props. Shell variants from `formControlToggleRecipe`. */
export interface CheckboxProps extends FormControlToggleVariantProps {
  /**
   * Style recipe override.
   *
   * @defaultValue checkboxRecipe
   */
  recipe?: CheckboxRecipeFn;
}
