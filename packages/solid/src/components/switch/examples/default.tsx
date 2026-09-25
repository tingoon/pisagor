import { Field } from "../../field";
import { Switch } from "../index";

export function Default() {
  return (
    <Field orientation="horizontal">
      <Switch />
      <Field.Label>Airplane mode</Field.Label>
    </Field>
  );
}
