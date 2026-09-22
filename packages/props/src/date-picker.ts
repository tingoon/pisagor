import type { DatePickerRecipeFn } from "@pisagor/recipes/date-picker";

/** DatePicker props. */
export interface DatePickerProps {
  /**
   * Style recipe override.
   * @defaultValue datePickerRecipe
   */
  recipe?: DatePickerRecipeFn;
}
