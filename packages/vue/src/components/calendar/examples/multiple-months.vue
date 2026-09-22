<script setup lang="ts">
import { Card } from "@pisagor/vue";
import { ref } from "vue";
import { Calendar, parseDate } from "..";

const value = ref([parseDate(new Date())]);

function onValueChange(details: { value: typeof value.value }) {
  value.value = details.value;
}
</script>

<template>
  <Card class="[--space:--spacing(2)]">
    <Card.Content>
      <Calendar
        :num-of-months="2"
        selection-mode="range"
        :value="value"
        @value-change="onValueChange"
      >
        <Calendar.ViewControl>
          <Calendar.PrevTrigger />
          <Calendar.ViewDate />
          <Calendar.NextTrigger />
        </Calendar.ViewControl>
        <div class="flex gap-2">
          <Calendar.Table>
            <Calendar.WeekDays />
            <Calendar.TableDays />
          </Calendar.Table>
          <Calendar.Table>
            <Calendar.WeekDays />
            <Calendar.TableNextMonth />
          </Calendar.Table>
        </div>
      </Calendar>
    </Card.Content>
  </Card>
</template>
