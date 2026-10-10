import { NumberField } from "@pisagor/react-form";

export function Default() {
  return (
    <NumberField
      defaultValue="2"
      description="Up to 8 guests per booking."
      id="number-field-guests"
      label="Guests"
      max={8}
      min={1}
    />
  );
}
