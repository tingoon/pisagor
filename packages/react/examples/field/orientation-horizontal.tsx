import { Switch } from "@pisagor/react";
import { Field } from "@pisagor/react/field";
export function OrientationHorizontal() {
  return (
    <Field orientation="horizontal">
      <Switch />
      <Field.Label>Enable notifications</Field.Label>
    </Field>
  );
}
