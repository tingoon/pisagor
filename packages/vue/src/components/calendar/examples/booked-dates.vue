<script setup lang="ts">
import { Card } from "@pisagor/vue";
import { Calendar } from "..";

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
          <Calendar.PrevTrigger />
          <Calendar.MonthSelect />
          <Calendar.YearSelect />
          <Calendar.NextTrigger />
        </Calendar.ViewControl>
        <Calendar.Table>
          <Calendar.WeekDays />
          <Calendar.TableDays />
        </Calendar.Table>
      </Calendar>
    </Card.Content>
  </Card>
</template>
