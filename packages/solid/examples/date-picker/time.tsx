import source from "./time.tsx?raw";
import { DatePicker, Field } from "@pisagor/solid";
export function Time() {
  return (
    <Field>
      <Field.Label>Time</Field.Label>
      <DatePicker.TimeInput />
    </Field>
  );
}

export { source as TimeSource };
