/** @jsxImportSource solid-js */
import { Field } from "@pisagor/solid/field";
import { Input } from "@pisagor/solid/input";

export function Default() {
  return (
    <Field>
      <Field.Label>Email</Field.Label>
      <Input placeholder="you@example.com" type="email" />
      <Field.Helper>We'll never share your email.</Field.Helper>
    </Field>
  );
}
