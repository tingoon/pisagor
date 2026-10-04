import type { DatePickerRecipeFn } from "@pisagor/recipes";

/** DatePicker props. */
export interface DatePickerProps {
  /**
   * Style recipe override.
   * @defaultValue datePickerRecipe
   */
  recipe?: DatePickerRecipeFn;
}
