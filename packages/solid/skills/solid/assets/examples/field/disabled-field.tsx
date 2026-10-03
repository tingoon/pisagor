/** @jsxImportSource solid-js */
import { Input } from "@pisagor/solid";
import { Field } from "@pisagor/solid/field";
export function DisabledField() {
  return (
    <Field disabled>
      <Field.Label>Email</Field.Label>
      <Input disabled placeholder="Enter your email" type="email" />
      <Field.Description>
        This field is currently unavailable.
      </Field.Description>
    </Field>
  );
}
