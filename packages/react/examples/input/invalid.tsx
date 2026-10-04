import { Field, Input } from "@pisagor/react";

export function Invalid() {
  return (
    <Field invalid>
      <Input placeholder="you@example.com" />
    </Field>
  );
}
