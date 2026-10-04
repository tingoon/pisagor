import { Field } from "@pisagor/react";
import { Progress } from "@pisagor/react/progress";
export function Indeterminate() {
  return (
    <Field>
      <Field.Label>Establishing connection...</Field.Label>
      <Progress />
    </Field>
  );
}
