import { Field } from "@pisagor/react";
import { Checkbox } from "..";
export function Default() {
  return (
    <Field orientation="horizontal">
      <Checkbox />
      <Field.Label>Accept terms and conditions</Field.Label>
    </Field>
  );
}
