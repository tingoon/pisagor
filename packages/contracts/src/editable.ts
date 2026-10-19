import type { EditableRecipeFn, EditableVariantProps } from "@pisagor/recipes";

/**
 * Shared Editable root contract: visual variants and recipe override. Used by
 * compound roots; excludes host DOM attributes.
 */
export interface EditableRootContract extends EditableVariantProps {
  /**
   * Style recipe override.
   *
   * @defaultValue editableRecipe
   */
  recipe?: EditableRecipeFn;
}
