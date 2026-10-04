import { Field, Rating } from "@pisagor/react";

export function Invalid() {
  return (
    <Field invalid>
      <Rating defaultValue={2} />
    </Field>
  );
}
