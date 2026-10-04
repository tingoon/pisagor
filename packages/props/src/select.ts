import type { SelectRecipeFn } from "@pisagor/recipes";

/** Select props. */
export interface SelectProps {
  /**
   * Style recipe override.
   * @defaultValue selectRecipe
   */
  recipe?: SelectRecipeFn;
}
