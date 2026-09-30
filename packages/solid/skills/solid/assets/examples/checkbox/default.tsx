import { Checkbox } from "../../../../../src/components/checkbox/index";
import { Field } from "../../../../../src/components/field";

export function Default() {
  return (
    <Field orientation="horizontal">
      <Checkbox />
      <Field.Label>Accept terms and conditions</Field.Label>
    </Field>
  );
}
