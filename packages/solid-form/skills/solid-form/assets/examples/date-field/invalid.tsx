/** @jsxImportSource solid-js */
import { DateField } from "@pisagor/solid-form";

export function Invalid() {
  return (
    <DateField
      error="Please choose a date."
      id="date-field-start-date-invalid"
      invalid
      label="Start date"
    />
  );
}
