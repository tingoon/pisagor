import source from "./switch-field.tsx?raw";
import { Field, Switch } from "@pisagor/solid";
export function SwitchField() {
  return (
    <Field orientation="horizontal">
      <Switch defaultChecked />
      <Field.Label> Airplane mode</Field.Label>
    </Field>
  );
}

export { source as SwitchFieldSource };
