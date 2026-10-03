/** @jsxImportSource solid-js */
import { Field } from "@pisagor/solid";
import { Progress } from "@pisagor/solid/progress";
export function Indeterminate() {
  return (
    <Field>
      <Field.Label>Establishing connection...</Field.Label>
      <Progress />
    </Field>
  );
}
