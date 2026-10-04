/** @jsxImportSource solid-js */
import { Switch } from "@pisagor/solid";
import { Field } from "@pisagor/solid/field";
export function SwitchField() {
  return (
    <Field orientation="horizontal">
      <Switch defaultChecked />
      <Field.Label> Airplane mode</Field.Label>
    </Field>
  );
}
