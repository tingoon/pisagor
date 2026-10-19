<script lang="ts" setup>
import { PhCalendar, PhCaretLeft, PhCaretRight } from "@phosphor-icons/vue";
import { Button, Calendar, DatePicker, parseDate } from "@pisagor/vue";
import { computed, ref } from "vue";

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
  <DatePicker.Root :value="value" @value-change="handleValueChange">
    <DatePicker.Trigger as-child>
      <Button variant="outline">
        <PhCalendar />
        {{ formattedDate }}
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
