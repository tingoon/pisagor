import { DatePicker, Field } from "@pisagor/solid";
export function Time() {
  return (
    <Field>
      <Field.Label>Time</Field.Label>
      <DatePicker.Timer />
    </Field>
  );
}
