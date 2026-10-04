/** @jsxImportSource solid-js */
import { Field, Textarea } from "@pisagor/solid";

export function Invalid() {
  return (
    <Field invalid>
      <Textarea placeholder="Tell us more" />
    </Field>
  );
}
