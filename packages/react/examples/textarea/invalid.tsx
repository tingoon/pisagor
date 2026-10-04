import { Field, Textarea } from "@pisagor/react";

export function Invalid() {
  return (
    <Field invalid>
      <Textarea placeholder="Tell us more" />
    </Field>
  );
}
