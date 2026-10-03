import { Field } from "@pisagor/react";
import { Switch } from "@pisagor/react/switch";
export function Default() {
  return (
    <Field orientation="horizontal">
      <Switch />
      <Field.Label>Airplane mode</Field.Label>
    </Field>
  );
}
