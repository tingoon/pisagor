import { DateField } from "@pisagor/react-form";

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
