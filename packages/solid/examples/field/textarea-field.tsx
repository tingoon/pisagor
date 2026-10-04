/** @jsxImportSource solid-js */
import { Field, Textarea } from "@pisagor/solid";
export function TextareaField() {
  return (
    <Field>
      <Field.Label>Bio</Field.Label>
      <Textarea placeholder="Tell us about yourself…" />
      <Field.Description>
        Write a short bio. Maximum 500 characters.
      </Field.Description>
    </Field>
  );
}
