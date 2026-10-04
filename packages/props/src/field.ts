import type { FieldRecipeFn, FieldVariantProps } from "@pisagor/recipes";

/** Field props. */
export interface FieldProps extends FieldVariantProps {
  /**
   * Style recipe override.
   * @defaultValue fieldRecipe
   */
  recipe?: FieldRecipeFn;
}
