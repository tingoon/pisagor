import { Field } from "@pisagor/react";
import { Rating } from "..";

export function Invalid() {
  return (
    <Field invalid>
      <Rating defaultValue={2} />
    </Field>
  );
}
