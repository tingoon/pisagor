import type { EditableRecipeFn } from "@pisagor/recipes/editable";

/** Editable props. */
export interface EditableProps {
  /**
   * Style recipe override.
   * @defaultValue editableRecipe
   */
  recipe?: EditableRecipeFn;
}
