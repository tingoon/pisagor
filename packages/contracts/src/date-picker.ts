import type {
  DatePickerRecipeFn,
  DatePickerRecipeSlot,
} from "@pisagor/recipes";
import type { SlotClassNames } from "./internal";

/**
 * Shared DatePicker root contract: recipe override. Used by compound roots;
 * excludes host DOM attributes.
 */
export interface DatePickerRootContract {
  /**
   * Style recipe override.
   *
   * @defaultValue datePickerRecipe
   */
  recipe?: DatePickerRecipeFn;
}

/**
 * DatePicker shorthand contract. Compose with `DatePickerRootContract` /
 * framework `DatePickerRootProps`.
 */
export interface DatePickerContract {
  /** Per-slot class name overrides. */
  classNames?: SlotClassNames<DatePickerRecipeSlot>;
}
