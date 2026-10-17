import { DateField } from "@pisagor/react-form";

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
