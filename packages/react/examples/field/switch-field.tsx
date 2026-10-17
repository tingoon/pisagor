import { Field, Switch } from "@pisagor/react";
export function SwitchField() {
  return (
    <Field orientation="horizontal">
      <Switch defaultChecked />
      <Field.Label> Airplane mode</Field.Label>
    </Field>
  );
}
