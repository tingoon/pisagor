<script lang="ts" setup>
import { PhCaretLeft, PhCaretRight } from "@phosphor-icons/vue";
import { Button, Calendar, Card } from "@pisagor/vue";

const isWeekend = (date: { year: number; month: number; day: number }) => {
  const dayOfWeek = new Date(date.year, date.month - 1, date.day).getDay();

  return dayOfWeek === 0 || dayOfWeek === 6;
};
</script>

<template>
  <Card class="[--space:--spacing(2)]">
    <Card.Content>
      <Calendar :is-date-unavailable="isWeekend">
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
      </Calendar>
    </Card.Content>
  </Card>
</template>
