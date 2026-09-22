import { Field } from "@pisagor/react";
import { Input } from "..";

export function Invalid() {
  return (
    <Field invalid>
      <Input placeholder="you@example.com" />
    </Field>
  );
}
