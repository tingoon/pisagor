import type { EditableRecipeFn } from "@pisagor/recipes";

/**
 * Shared Editable root contract: recipe override. Used by compound roots;
 * excludes host DOM attributes.
 */
export interface EditableRootContract {
  /**
   * Style recipe override.
   *
   * @defaultValue editableRecipe
   */
  recipe?: EditableRecipeFn;
}
