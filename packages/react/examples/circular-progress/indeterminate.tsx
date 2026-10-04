import { Field } from "@pisagor/react";
import { CircularProgress } from "@pisagor/react/circular-progress";
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
