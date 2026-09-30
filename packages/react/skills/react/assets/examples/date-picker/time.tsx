import { Field } from "@pisagor/react";
import { DatePicker } from "@pisagor/react/date-picker";
export function Time() {
  return (
    <Field>
      <Field.Label>Time</Field.Label>
      <DatePicker.Timer />
    </Field>
  );
}
