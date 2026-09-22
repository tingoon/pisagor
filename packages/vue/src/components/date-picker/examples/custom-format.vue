<script setup lang="ts">
import { PhCalendar } from "@phosphor-icons/vue";
import { Button, Calendar } from "@pisagor/vue";
import { defineComponent, h } from "vue";
import { DatePicker } from "..";

interface WeekDay {
  narrow: string;
  short: string;
}

const CalendarWeekDays = defineComponent({
  name: "CalendarWeekDays",
  setup() {
    return () =>
      h(Calendar.Context, null, {
        default: (calendar: { weekDays: WeekDay[] }) =>
          h(Calendar.TableHead, null, () =>
            h(Calendar.TableRow, null, () =>
              calendar.weekDays.map((weekDay) =>
                h(Calendar.TableHeader, { key: weekDay.short }, () => weekDay.narrow),
              ),
            ),
          ),
      });
  },
});

const CalendarBody = defineComponent({
  name: "CalendarBody",
  setup() {
    return () => [
      h(Calendar.ViewControl, null, () => [
        h(Calendar.PrevTrigger),
        h(Calendar.MonthSelect),
        h(Calendar.YearSelect),
        h(Calendar.NextTrigger),
      ]),
      h(Calendar.Table, null, () => [h(CalendarWeekDays), h(Calendar.TableDays)]),
    ];
  },
});

import { ref } from "vue";
import { parseDate } from "..";

const value = ref([parseDate("2025-01-15")]);
function handleValueChange(details?: { value?: unknown; page?: unknown }) {
  if (details && "value" in details) value.value = details.value;
  else if (details && "page" in details) value.value = details.page;
}
</script>

<template>
        <DatePicker @value-change="handleValueChange" :value="value">
          <DatePicker.Trigger :asChild="true">
            <Button variant="outline">
              <PhCalendar />
              {{ formattedDate }}
            </Button>
          </DatePicker.Trigger>
          <DatePicker.Content>
            <CalendarBody />
          </DatePicker.Content>
        </DatePicker>
  
</template>
