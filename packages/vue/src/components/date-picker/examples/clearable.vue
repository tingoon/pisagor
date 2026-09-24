<script lang="ts" setup>
import { PhCalendar } from "@phosphor-icons/vue";
import { Button, Field } from "@pisagor/vue";
import { ref } from "vue";
import { DatePicker, parseDate } from "..";

const value = ref([parseDate("2025-06-15")]);

function handleValueChange(next: unknown) {
  value.value = (next as typeof value.value) ?? [];
}
</script>

<template>
  <div class="flex flex-col gap-6">
    <Field>
      <Field.Label>Input variant</Field.Label>
      <DatePicker :value="value" @value-change="handleValueChange">
        <DatePicker.Input placeholder="Select date" />
        <DatePicker.Content />
      </DatePicker>
    </Field>
    <Field>
      <Field.Label>Trigger variant</Field.Label>
      <DatePicker :value="value" @value-change="handleValueChange">
        <DatePicker.Trigger :as-child="true">
          <Button variant="outline">
            <PhCalendar />
            <DatePicker.ValueText placeholder="Pick a date" />
          </Button>
        </DatePicker.Trigger>
        <DatePicker.Content />
      </DatePicker>
    </Field>
  </div>
</template>
