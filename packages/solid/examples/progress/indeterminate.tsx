import { Field, Progress } from "@pisagor/solid";
export function Indeterminate() {
  return (
    <Field>
      <Field.Label>Establishing connection...</Field.Label>
      <Progress />
    </Field>
  );
}
