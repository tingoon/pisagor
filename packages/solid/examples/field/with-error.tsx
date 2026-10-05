import { Field, Input } from "@pisagor/solid";
export function WithError() {
  return (
    <Field invalid>
      <Field.Label>Email</Field.Label>
      <Input placeholder="Enter your email" type="email" />
      <Field.Error>Please enter a valid email address.</Field.Error>
    </Field>
  );
}
