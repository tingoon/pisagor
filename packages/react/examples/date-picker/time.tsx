import { DatePicker, Field } from "@pisagor/react";
export function Time() {
  return (
    <Field>
      <Field.Label>Time</Field.Label>
      <DatePicker.Timer />
    </Field>
  );
}
