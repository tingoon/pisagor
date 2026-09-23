import { Input } from "@pisagor/react";
import { Field } from "..";
export function RequiredField() {
  return (
    <Field required>
      <Field.Label>
        Password <Field.RequiredIndicator />
      </Field.Label>
      <Input placeholder="Enter password" type="password" />
      <Field.Error>Please fill out this field.</Field.Error>
    </Field>
  );
}
