/** @jsxImportSource solid-js */
import { Field } from "@pisagor/solid/field";
import { Switch } from "@pisagor/solid/switch";

export function Default() {
  return (
    <Field orientation="horizontal">
      <Switch />
      <Field.Label>Airplane mode</Field.Label>
    </Field>
  );
}
