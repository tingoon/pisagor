/** @jsxImportSource solid-js */
import { Field } from "@pisagor/solid";
import { DatePicker } from "@pisagor/solid/date-picker";
export function Time() {
  return (
    <Field>
      <Field.Label>Time</Field.Label>
      <DatePicker.Timer />
    </Field>
  );
}
