import { CircularProgress, Field } from "@pisagor/react";
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
