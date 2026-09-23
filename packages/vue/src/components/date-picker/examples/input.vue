<script lang="ts" setup >
import { Calendar } from "@pisagor/vue";
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
</script>

<template>
        <DatePicker>
          <DatePicker.Input placeholder="Select date" />
          <DatePicker.Content>
            <CalendarBody />
          </DatePicker.Content>
        </DatePicker>
  
</template>
