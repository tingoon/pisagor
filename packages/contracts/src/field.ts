import type { FieldRecipeFn, FieldVariantProps } from "@pisagor/recipes";

/**
 * Shared Field root contract: visual variants and recipe override. Used by
 * compound roots; excludes host DOM attributes.
 */
export interface FieldRootContract extends FieldVariantProps {
  /**
   * Style recipe override.
   *
   * @defaultValue fieldRecipe
   */
  recipe?: FieldRecipeFn;
}
