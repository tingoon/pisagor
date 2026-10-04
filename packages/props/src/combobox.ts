import type { ComboboxRecipeFn, ComboboxVariantProps } from "@pisagor/recipes";

/** Combobox props. */
export interface ComboboxProps extends ComboboxVariantProps {
  /**
   * Style recipe override.
   * @defaultValue comboboxRecipe
   */
  recipe?: ComboboxRecipeFn;
}
