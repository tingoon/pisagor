import type { SelectRecipeFn } from "@pisagor/recipes/select";

/** Select props. */
export interface SelectProps {
  /**
   * Style recipe override.
   * @defaultValue selectRecipe
   */
  recipe?: SelectRecipeFn;
}
