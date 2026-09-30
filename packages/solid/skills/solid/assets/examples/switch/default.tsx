import { Field } from "../../../../../src/components/field";
import { Switch } from "../../../../../src/components/switch/index";

export function Default() {
  return (
    <Field orientation="horizontal">
      <Switch />
      <Field.Label>Airplane mode</Field.Label>
    </Field>
  );
}
