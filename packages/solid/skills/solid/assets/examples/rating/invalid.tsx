/** @jsxImportSource solid-js */
import { Field } from "@pisagor/solid";
import { Rating } from "@pisagor/solid/rating";

export function Invalid() {
  return (
    <Field invalid>
      <Rating defaultValue={2} />
    </Field>
  );
}
