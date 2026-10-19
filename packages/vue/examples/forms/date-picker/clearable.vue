<script lang="ts" setup>
import { PhCalendar, PhCaretLeft, PhCaretRight } from "@phosphor-icons/vue";
import { Button, Calendar, DatePicker, Field, parseDate } from "@pisagor/vue";
import { ref } from "vue";

const value = ref([parseDate("2025-06-15")]);

function handleValueChange(next: unknown) {
  value.value = (next as typeof value.value) ?? [];
}
</script>

<template>
  <div class="flex flex-col gap-2">
    <Field>
      <Field.Label>Input variant</Field.Label>
      <DatePicker
        clearable
        placeholder="Select date"
        :value="value"
        @value-change="handleValueChange"
      />
    </Field>
    <Field>
      <Field.Label>Trigger variant</Field.Label>
      <DatePicker.Root :value="value" @value-change="handleValueChange">
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
    </Field>
  </div>
</template>
