import { CalendarIcon } from "@phosphor-icons/react";
import { Button, Field, parseDate } from "@pisagor/react";
import { useState } from "react";
import { DatePicker } from "..";
export function Clearable() {
  const [value, setValue] = useState([parseDate("2025-06-15")]);

  return (
    <div className="flex flex-col gap-2">
      <Field>
        <Field.Label>Input variant</Field.Label>
        <DatePicker
          onValueChange={(value) => setValue(value ?? [])}
          value={value}
        >
          <DatePicker.Input placeholder="Select date" />
          <DatePicker.Content />
        </DatePicker>
      </Field>
      <Field>
        <Field.Label>Trigger variant</Field.Label>
        <DatePicker
          onValueChange={(value) => setValue(value ?? [])}
          value={value}
        >
          <DatePicker.Trigger asChild>
            <Button variant="outline">
              <CalendarIcon />
              <DatePicker.ValueText placeholder="Pick a date" />
            </Button>
          </DatePicker.Trigger>
          <DatePicker.Content />
        </DatePicker>
      </Field>
    </div>
  );
}
