<script setup lang="ts">
import { PhCalendar } from "@phosphor-icons/vue";
import { Button, Field } from "@pisagor/vue";
import { ref } from "vue";
import { DatePicker, parseDate } from "..";

const value = ref([parseDate("2025-06-15")]);
function handleValueChange(details?: { value?: unknown; page?: unknown }) {
  if (details && "value" in details) value.value = details.value;
  else if (details && "page" in details) value.value = details.page;
}
</script>

<template>
        <div class="flex flex-col gap-6">
          <Field>
            <Field.Label>Input variant</Field.Label>
            <DatePicker @value-change="handleValueChange" :value="value">
              <DatePicker.Input placeholder="Select date" />
              <DatePicker.Content />
            </DatePicker>
          </Field>
          <Field>
            <Field.Label>Trigger variant</Field.Label>
            <DatePicker @value-change="handleValueChange" :value="value">
              <DatePicker.Trigger :asChild="true">
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
