/** @jsxImportSource solid-js */
import { Input } from "@pisagor/solid";
import { Field } from "@pisagor/solid/field";
export function WithError() {
  return (
    <Field invalid>
      <Field.Label>Email</Field.Label>
      <Input placeholder="Enter your email" type="email" />
      <Field.Error>Please enter a valid email address.</Field.Error>
    </Field>
  );
}
