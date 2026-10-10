<script lang="ts">
import { datePickerRecipe } from "@pisagor/recipes";
import { Button, Calendar, DatePicker } from "@pisagor/svelte";
import CalendarIcon from "phosphor-svelte/lib/CalendarIcon";
import { tv } from "tailwind-variants";

const brandDatePickerRecipe = tv({
  extend: datePickerRecipe,
  slots: {
    content: "border-emerald-500/40",
    trigger: "text-emerald-600",
  },
  variants: {},
});
</script>

<DatePicker recipe={brandDatePickerRecipe}>
  <DatePicker.Trigger>
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
