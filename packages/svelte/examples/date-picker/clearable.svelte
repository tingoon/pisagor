<script lang="ts">
import { Button, Field } from "@pisagor/svelte";
import { parseDate } from "@pisagor/svelte/calendar";
import { DatePicker } from "@pisagor/svelte/date-picker";
import CalendarIcon from "phosphor-svelte/lib/CalendarIcon";

let value = $state([parseDate("2025-06-15")]);
</script>

<div class="flex flex-col gap-2">
  <Field>
    <Field.Label>Input variant</Field.Label>
    <DatePicker onValueChange={(details) => (value = details.value ?? [])} {value}>
      <DatePicker.Input clearable placeholder="Select date" />
      <DatePicker.Content />
    </DatePicker>
  </Field>
  <Field>
    <Field.Label>Trigger variant</Field.Label>
    <DatePicker onValueChange={(details) => (value = details.value ?? [])} {value}>
      <DatePicker.Trigger>
        {#snippet asChild(props)}
          <Button {...props()} variant="outline">
            <CalendarIcon />
            <DatePicker.ValueText placeholder="Pick a date" />
          </Button>
        {/snippet}
      </DatePicker.Trigger>
      <DatePicker.Content />
    </DatePicker>
  </Field>
</div>
