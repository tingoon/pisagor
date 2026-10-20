<script lang="ts" setup>
import { PhCalendar, PhCaretLeft, PhCaretRight } from "@phosphor-icons/vue";
import { Button, Calendar, DatePicker, parseDate } from "@pisagor/vue";

const focusedValue = parseDate(new Date());
</script>

<template>
  <DatePicker.Root selection-mode="range" :focused-value="focusedValue">
    <DatePicker.Trigger as-child>
      <Button variant="outline">
        <PhCalendar />
        <DatePicker.ValueText placeholder="Pick a date range" />
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
