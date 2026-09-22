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
const presets = [
  { days: 0, label: "Today" },
  { days: 1, label: "Tomorrow" },
  { days: 3, label: "In 3 days" },
  { days: 7, label: "In a week" },
] as const;
const defaultValue = [parseDate(new Date())];
</script>

<template>
        <DatePicker :defaultValue="defaultValue">
          <DatePicker.Trigger :asChild="true">
            <Button variant="outline">
              <PhCalendar />
              <DatePicker.ValueText />
            </Button>
          </DatePicker.Trigger>
          <DatePicker.Content>
            <div class="flex max-sm:flex-col">
              <div class="relative py-1 ps-1 max-sm:order-1 max-sm:border-t">
                <div class="flex h-full flex-col sm:border-e sm:pe-3">
                  <DatePicker.PresetTrigger
                    v-for="preset in presets"
                    :asChild="true"
                    :key="preset.label"
                    :value="preset.value"
                  >
                    <Button class="w-full justify-start" size="sm" variant="ghost">
                      {{ preset.label }}
                    </Button>
                  </DatePicker.PresetTrigger>
                </div>
              </div>
              <div class="max-sm:pb-3 sm:ps-2">
                <CalendarBody />
              </div>
            </div>
          </DatePicker.Content>
        </DatePicker>
  
</template>
