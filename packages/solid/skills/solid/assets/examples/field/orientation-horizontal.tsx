/** @jsxImportSource solid-js */
import { Switch } from "@pisagor/solid";
import { Field } from "@pisagor/solid/field";
export function OrientationHorizontal() {
  return (
    <Field orientation="horizontal">
      <Switch />
      <Field.Label>Enable notifications</Field.Label>
    </Field>
  );
}
