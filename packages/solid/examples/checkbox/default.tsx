/** @jsxImportSource solid-js */
import { Checkbox } from "@pisagor/solid/checkbox";
import { Field } from "@pisagor/solid/field";

export function Default() {
  return (
    <Field orientation="horizontal">
      <Checkbox />
      <Field.Label>Accept terms and conditions</Field.Label>
    </Field>
  );
}
