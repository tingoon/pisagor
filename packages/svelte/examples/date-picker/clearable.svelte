<script lang="ts">
import { Button, DatePicker, Field, parseDate } from "@pisagor/svelte";
import CalendarIcon from "phosphor-svelte/lib/CalendarIcon";

let value = $state([parseDate("2025-06-15")]);
</script>

<div class="flex flex-col gap-2">
  <Field>
    <Field.Label>Input variant</Field.Label>
    <DatePicker onValueChange={(next) => (value = next ?? [])} {value}>
      <DatePicker.Input clearable placeholder="Select date" />
      <DatePicker.Content />
    </DatePicker>
  </Field>
  <Field>
    <Field.Label>Trigger variant</Field.Label>
    <DatePicker onValueChange={(next) => (value = next ?? [])} {value}>
      <DatePicker.Trigger>
        {#snippet asChild(
          props: any,
        )}
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
