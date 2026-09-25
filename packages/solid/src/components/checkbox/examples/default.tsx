import { Field } from "../../field";
import { Checkbox } from "../index";

export function Default() {
  return (
    <Field orientation="horizontal">
      <Checkbox />
      <Field.Label>Accept terms and conditions</Field.Label>
    </Field>
  );
}
