<script lang="ts" setup>
import { PhCalendar, PhCaretLeft, PhCaretRight } from "@phosphor-icons/vue";
import { datePickerRecipe } from "@pisagor/recipes";
import { Button, Calendar, DatePicker } from "@pisagor/vue";
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

<template>
  <DatePicker.Root :recipe="brandDatePickerRecipe">
    <DatePicker.Trigger as-child>
      <Button variant="outline">
        <PhCalendar />
        <DatePicker.ValueText placeholder="Pick a date" />
      </Button>
    </DatePicker.Trigger>
    <Teleport to="body">
      <DatePicker.Positioner>
        <DatePicker.Content>
          <Calendar.ViewControl>
            <Calendar.PrevTrigger as-child>
              <Button size="icon-md" variant="ghost">
                <PhCaretLeft aria-hidden class="rtl:rotate-180" />
              </Button>
            </Calendar.PrevTrigger>
            <Calendar.MonthSelect />
            <Calendar.YearSelect />
            <Calendar.NextTrigger as-child>
              <Button size="icon-md" variant="ghost">
                <PhCaretRight aria-hidden class="rtl:rotate-180" />
              </Button>
            </Calendar.NextTrigger>
          </Calendar.ViewControl>
          <Calendar.Table>
            <Calendar.WeekDays />
            <Calendar.TableDays />
          </Calendar.Table>
        </DatePicker.Content>
      </DatePicker.Positioner>
    </Teleport>
  </DatePicker.Root>
</template>
