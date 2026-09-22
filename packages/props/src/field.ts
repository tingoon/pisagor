import type { FieldRecipeFn, FieldVariantProps } from "@pisagor/recipes/field";

/** Field props. */
export interface FieldProps extends FieldVariantProps {
  /**
   * Style recipe override.
   * @defaultValue fieldRecipe
   */
  recipe?: FieldRecipeFn;
}
