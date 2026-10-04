/** @jsxImportSource solid-js */

import { Button, DatePicker, Field, parseDate } from "@pisagor/solid";
import { CalendarIcon } from "@pisagor/solid/icons";
import { createSignal } from "solid-js";
export function Clearable() {
  const [value, setValue] = createSignal([parseDate("2025-06-15")]);

  return (
    <div class="flex flex-col gap-2">
      <Field>
        <Field.Label>Input variant</Field.Label>
        <DatePicker
          onValueChange={(value) => setValue(value() ?? [])}
          value={value()}
        >
          <DatePicker.Input placeholder="Select date" />
          <DatePicker.Content />
        </DatePicker>
      </Field>
      <Field>
        <Field.Label>Trigger variant</Field.Label>
        <DatePicker
          onValueChange={(value) => setValue(value() ?? [])}
          value={value()}
        >
          <DatePicker.Trigger
            asChild={(props) => (
              <Button {...props()} variant="outline">
                <CalendarIcon />
                <DatePicker.ValueText placeholder="Pick a date" />
              </Button>
            )}
          />
          <DatePicker.Content />
        </DatePicker>
      </Field>
    </div>
  );
}
