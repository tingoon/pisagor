import { Field } from "@pisagor/react";
import { Textarea } from "@pisagor/react/textarea";

export function Invalid() {
  return (
    <Field invalid>
      <Textarea placeholder="Tell us more" />
    </Field>
  );
}
