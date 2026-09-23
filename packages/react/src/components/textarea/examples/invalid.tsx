import { Field } from "@pisagor/react";
import { Textarea } from "..";

export function Invalid() {
  return (
    <Field invalid>
      <Textarea placeholder="Tell us more" />
    </Field>
  );
}
