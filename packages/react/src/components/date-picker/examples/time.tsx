import { Field } from "@pisagor/react";
import { DatePicker } from "..";
export function Time() {
  return (
    <Field>
      <Field.Label>Time</Field.Label>
      <DatePicker.Timer />
    </Field>
  );
}
