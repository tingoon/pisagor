import type {
  ColorPickerRecipeFn,
  ColorPickerRecipeSlot,
} from "@pisagor/recipes";
import type { SlotClassNames } from "./internal";

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

/**
 * ColorPicker shorthand contract. Compose with `ColorPickerRootContract` /
 * framework `ColorPickerRootProps`.
 */
export interface ColorPickerContract {
  /** Per-slot class name overrides. */
  classNames?: SlotClassNames<ColorPickerRecipeSlot>;
}
