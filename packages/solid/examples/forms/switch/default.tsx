import { Field, Switch } from "@pisagor/solid";

export function Default() {
  return (
    <Field orientation="horizontal">
      <Switch />
      <Field.Label>Airplane mode</Field.Label>
    </Field>
  );
}
