import { Switch } from "@pisagor/react";
import { Field } from "..";
export function SwitchField() {
  return (
    <Field orientation="horizontal">
      <Switch defaultChecked />
      <Field.Label> Airplane mode</Field.Label>
    </Field>
  );
}
