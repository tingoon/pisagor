import type { ComboboxRecipeFn, ComboboxVariantProps } from "@pisagor/recipes/combobox";

/** Combobox props. */
export interface ComboboxProps extends ComboboxVariantProps {
  /**
   * Style recipe override.
   * @defaultValue comboboxRecipe
   */
  recipe?: ComboboxRecipeFn;
}
