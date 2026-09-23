import { Field } from "@pisagor/react";
import { Progress } from "..";
export function Indeterminate() {
  return (
    <Field>
      <Field.Label>Establishing connection...</Field.Label>
      <Progress />
    </Field>
  );
}
