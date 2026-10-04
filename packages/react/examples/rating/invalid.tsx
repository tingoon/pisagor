import { Field } from "@pisagor/react";
import { Rating } from "@pisagor/react/rating";

export function Invalid() {
  return (
    <Field invalid>
      <Rating defaultValue={2} />
    </Field>
  );
}
