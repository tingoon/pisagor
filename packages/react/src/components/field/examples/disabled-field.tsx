import { Input } from "@pisagor/react";
import { Field } from "..";
export function DisabledField() {
  return (
    <Field disabled>
      <Field.Label>Email</Field.Label>
      <Input disabled placeholder="Enter your email" type="email" />
      <Field.Description>
        This field is currently unavailable.
      </Field.Description>
    </Field>
  );
}
