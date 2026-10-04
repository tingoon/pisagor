/** @jsxImportSource solid-js */
import { Field } from "@pisagor/solid";
import { CircularProgress } from "@pisagor/solid/circular-progress";
export function Indeterminate() {
  return (
    <Field>
      <Field.Label class="justify-center">
        Establishing connection...
      </Field.Label>
      <CircularProgress />
    </Field>
  );
}
