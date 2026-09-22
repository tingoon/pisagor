<script setup lang="ts">
import { Card } from "@pisagor/vue";
import { Calendar, parseDate } from "..";

const min = parseDate("2025-03-05");
const max = parseDate("2025-03-31");
</script>

<template>
  <Card class="[--space:--spacing(2)]">
    <Card.Content>
      <Calendar :max="max" :min="min">
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
