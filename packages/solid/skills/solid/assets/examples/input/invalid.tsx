/** @jsxImportSource solid-js */
import { Field } from "@pisagor/solid";
import { Input } from "@pisagor/solid/input";

export function Invalid() {
  return (
    <Field invalid>
      <Input placeholder="you@example.com" />
    </Field>
  );
}
