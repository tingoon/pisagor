import type { NumberInputRecipeFn } from "@pisagor/recipes/number-input";

/** NumberInput props. */
export interface NumberInputProps {
  /**
   * Style recipe override.
   * @defaultValue numberInputRecipe
   */
  recipe?: NumberInputRecipeFn;
}
