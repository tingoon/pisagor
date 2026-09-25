<script lang="ts" setup>
import { PhCalendar } from "@phosphor-icons/vue";
import { Button, Calendar } from "@pisagor/vue";
import { computed, defineComponent, h, ref } from "vue";
import { DatePicker, parseDate } from "..";

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
                h(
                  Calendar.TableHeader,
                  { key: weekDay.short },
                  () => weekDay.narrow,
                ),
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
      h(Calendar.Table, null, () => [
        h(CalendarWeekDays),
        h(Calendar.TableDays),
      ]),
    ];
  },
});

const value = ref([parseDate("2025-01-15")]);

const formattedDate = computed(() =>
  new Intl.DateTimeFormat("en-US", { dateStyle: "long" }).format(
    new Date((value.value[0] ?? parseDate("2025-01-15")).toString()),
  ),
);

function handleValueChange(next: unknown) {
  value.value = (next as typeof value.value) ?? [];
}
</script>

<template>
  <DatePicker :value="value" @value-change="handleValueChange">
    <DatePicker.Trigger :as-child="true">
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
