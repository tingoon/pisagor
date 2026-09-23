import type { ColorPickerRecipeFn } from "@pisagor/recipes/color-picker";

/** ColorPicker props. */
export interface ColorPickerProps {
  /**
   * Style recipe override.
   * @defaultValue colorPickerRecipe
   */
  recipe?: ColorPickerRecipeFn;
}
