import type { ColorPickerRecipeFn } from "@pisagor/recipes";

/**
 * Shared ColorPicker root contract: recipe override. Used by compound roots;
 * excludes host DOM attributes.
 */
export interface ColorPickerRootContract {
  /**
   * Style recipe override.
   *
   * @defaultValue colorPickerRecipe
   */
  recipe?: ColorPickerRecipeFn;
}
