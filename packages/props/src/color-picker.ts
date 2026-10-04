import type { ColorPickerRecipeFn } from "@pisagor/recipes";

/** ColorPicker props. */
export interface ColorPickerProps {
  /**
   * Style recipe override.
   * @defaultValue colorPickerRecipe
   */
  recipe?: ColorPickerRecipeFn;
}
