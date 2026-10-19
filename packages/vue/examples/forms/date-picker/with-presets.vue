<script lang="ts" setup>
import { PhCalendar, PhCaretLeft, PhCaretRight } from "@phosphor-icons/vue";
import { Button, Calendar, DatePicker, parseDate } from "@pisagor/vue";

const presets = [
  { days: 0, label: "Today" },
  { days: 1, label: "Tomorrow" },
  { days: 3, label: "In 3 days" },
  { days: 7, label: "In a week" },
] as const;
const defaultValue = [parseDate(new Date())];

function presetValue(days: number) {
  return [parseDate(new Date(new Date().setDate(new Date().getDate() + days)))];
}
</script>

<template>
  <DatePicker.Root :default-value="defaultValue">
    <DatePicker.Trigger as-child>
      <Button variant="outline">
        <PhCalendar />
        <DatePicker.ValueText />
      </Button>
    </DatePicker.Trigger>
    <Teleport to="body">
      <DatePicker.Positioner>
        <DatePicker.Content>
          <div class="flex max-sm:flex-col">
            <div class="relative py-1 ps-1 max-sm:order-1 max-sm:border-t">
              <div class="flex h-full flex-col sm:border-e sm:pe-3">
                <DatePicker.PresetTrigger
                  v-for="preset in presets"
                  :key="preset.label"
                  as-child
                  :value="presetValue(preset.days)"
                >
                  <Button
                    class="w-full justify-start"
                    size="sm"
                    variant="ghost"
                  >
                    {{ preset.label }}
                  </Button>
                </DatePicker.PresetTrigger>
              </div>
            </div>
            <div class="max-sm:pb-3 sm:ps-2">
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
            </div>
          </div>
        </DatePicker.Content>
      </DatePicker.Positioner>
    </Teleport>
  </DatePicker.Root>
</template>
