import type { DatePickerRecipeFn } from "@pisagor/recipes";

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
