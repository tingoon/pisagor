import { Input } from "@pisagor/react";
import { Field } from "..";
export function WithError() {
  return (
    <Field invalid>
      <Field.Label>Email</Field.Label>
      <Input placeholder="Enter your email" type="email" />
      <Field.Error>Please enter a valid email address.</Field.Error>
    </Field>
  );
}
