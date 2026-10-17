import source from "./default.tsx?raw";
import { Field, Switch } from "@pisagor/react";
export function Default() {
  return (
    <Field orientation="horizontal">
      <Switch />
      <Field.Label>Airplane mode</Field.Label>
    </Field>
  );
}

export { source as DefaultSource };
