/** @jsxImportSource solid-js */
import { Field, Input } from "@pisagor/solid";

export function Invalid() {
  return (
    <Field invalid>
      <Input placeholder="you@example.com" />
    </Field>
  );
}
