<script lang="ts" setup>
import { Calendar, Card, parseDate } from "@pisagor/vue";

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
