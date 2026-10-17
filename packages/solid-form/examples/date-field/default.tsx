import { DateField } from "@pisagor/solid-form";

export function Default() {
  return (
    <DateField
      description="Used to send you a birthday discount."
      id="date-field-birthday"
      label="Date of birth"
      placeholder="MM/DD/YYYY"
    />
  );
}
