import { CircularProgress, Field } from "@pisagor/solid";
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
