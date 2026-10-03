import { Field } from "@pisagor/react";
import { Input } from "@pisagor/react/input";

export function Invalid() {
  return (
    <Field invalid>
      <Input placeholder="you@example.com" />
    </Field>
  );
}
