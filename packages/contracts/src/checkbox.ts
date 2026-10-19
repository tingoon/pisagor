import type {
  CheckboxGroupRecipeFn,
  CheckboxRecipeFn,
  CheckboxVariantProps,
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
 * Shared Checkbox root contract: visual variants and recipe override. Used by
 * compound roots; excludes host DOM attributes.
 */
export interface CheckboxRootContract extends CheckboxVariantProps {
  /**
   * Style recipe override.
   *
   * @defaultValue checkboxRecipe
   */
  recipe?: CheckboxRecipeFn;
}
