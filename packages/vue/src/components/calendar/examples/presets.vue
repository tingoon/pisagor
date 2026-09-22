<script setup lang="ts">
import { Button, Card } from "@pisagor/vue";
import { Calendar } from "..";

const presets = [
  { label: "Last 7 days", value: "last7Days" },
  { label: "Last 14 days", value: "last14Days" },
  { label: "Last 30 days", value: "last30Days" },
  { label: "This month", value: "thisMonth" },
] as const;
</script>

<template>
  <Calendar class="[--cell-size:--spacing(8)]" selection-mode="range">
    <Card class="[--space:--spacing(2)]">
      <Card.Content>
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
      </Card.Content>
      <Card.Footer class="flex flex-wrap">
        <Calendar.PresetTrigger
          v-for="preset in presets"
          :key="preset.value"
          as-child
          :value="preset.value"
        >
          <Button class="flex-1" size="sm" variant="outline">{{ preset.label }}</Button>
        </Calendar.PresetTrigger>
      </Card.Footer>
    </Card>
  </Calendar>
</template>
