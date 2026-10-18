import { datePickerRecipe } from "@pisagor/recipes";
import { DatePicker } from "@pisagor/solid";
import { tv } from "tailwind-variants";

const brandDatePickerRecipe = tv({
  extend: datePickerRecipe,
  slots: {
    content: "border-emerald-500/40",
    trigger: "text-emerald-600",
  },
  variants: {},
});

export function CustomRecipe() {
  return (
    <DatePicker recipe={brandDatePickerRecipe}>
      <DatePicker.Input placeholder="Pick a date" />
      <DatePicker.Content />
    </DatePicker>
  );
}
