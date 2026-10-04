import { Input } from "@pisagor/react";
import { Field } from "@pisagor/react/field";
export function Default() {
  return (
    <Field>
      <Field.Label>Username</Field.Label>
      <Input placeholder="Enter username" />
      <Field.Description>
        Choose a unique username for your account.
      </Field.Description>
    </Field>
  );
}
