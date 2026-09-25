import { Field } from "@pisagor/react";
import { CircularProgress } from "..";
export function Indeterminate() {
  return (
    <Field>
      <Field.Label className="justify-center">
        Establishing connection...
      </Field.Label>
      <CircularProgress />
    </Field>
  );
}
