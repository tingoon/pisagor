<script lang="ts" setup>
import { PhCaretLeft, PhCaretRight } from "@phosphor-icons/vue";
import { Button, Calendar, Card } from "@pisagor/vue";

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
      </Card.Content>
      <Card.Footer class="flex flex-wrap">
        <Calendar.PresetTrigger
          as-child
          v-for="preset in presets"
          :key="preset.value"
          :value="preset.value"
        >
          <Button class="flex-1" size="sm" variant="outline">{{
            preset.label
          }}</Button>
        </Calendar.PresetTrigger>
      </Card.Footer>
    </Card>
  </Calendar>
</template>
