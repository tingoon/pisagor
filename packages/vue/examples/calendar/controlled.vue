<script lang="ts">
import source from "./controlled.vue?raw";
export { source };
</script>

<script lang="ts" setup>
import { Calendar, Card, parseDate } from "@pisagor/vue";
import { ref } from "vue";

const value = ref([parseDate(new Date())]);

function onValueChange(details: { value: typeof value.value }) {
  value.value = details.value;
}
</script>

<template>
  <div class="flex flex-col gap-2">
    <Card class="[--space:--spacing(2)]">
      <Card.Content>
        <Calendar :value="value" @value-change="onValueChange">
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
    <p class="text-muted-foreground text-center text-sm">
      {{ value.map((date) => date.toString()).join(", ") }}
    </p>
  </div>
</template>
