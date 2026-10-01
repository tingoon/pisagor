/** @jsxImportSource solid-js */
import { Textarea } from "@pisagor/solid";
import { Field } from "@pisagor/solid/field";
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
