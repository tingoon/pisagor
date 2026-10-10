import { CalendarIcon } from "@phosphor-icons/react";
import { Button, Calendar, DatePicker } from "@pisagor/react";
import { datePickerRecipe } from "@pisagor/recipes";
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
      <DatePicker.Trigger asChild>
        <Button variant="outline">
          <CalendarIcon />
          <DatePicker.ValueText placeholder="Pick a date" />
        </Button>
      </DatePicker.Trigger>
      <DatePicker.Content>
        <Calendar.ViewControl>
          <Calendar.PrevTrigger />
          <Calendar.MonthSelect />
          <Calendar.YearSelect />
          <Calendar.NextTrigger />
        </Calendar.ViewControl>
        <Calendar.Table>
          <Calendar.WeekDays />
          <Calendar.TableDays />
        </Calendar.Table>
      </DatePicker.Content>
    </DatePicker>
  );
}
