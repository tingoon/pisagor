/** @jsxImportSource solid-js */
import { Field } from "@pisagor/solid";
import { Textarea } from "@pisagor/solid/textarea";

export function Invalid() {
  return (
    <Field invalid>
      <Textarea placeholder="Tell us more" />
    </Field>
  );
}
