import { Field, Input } from "@pisagor/solid";
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
