import { Checkbox, Field } from "@pisagor/react";
export function Default() {
  return (
    <Field orientation="horizontal">
      <Checkbox />
      <Field.Label>Accept terms and conditions</Field.Label>
    </Field>
  );
}
