import type { CheckboxGroupRecipeFn, CheckboxRecipeFn } from "@pisagor/recipes";

/** CheckboxGroup props. */
export interface CheckboxGroupProps {
  /**
   * Style recipe override.
   * @defaultValue checkboxGroupRecipe
   */
  recipe?: CheckboxGroupRecipeFn;
}

/** Checkbox props. */
export interface CheckboxProps {
  /**
   * Style recipe override.
   * @defaultValue checkboxRecipe
   */
  recipe?: CheckboxRecipeFn;
}
