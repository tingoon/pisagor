import { Field } from "../../../../../src/components/field/index";
import { Input } from "../../../../../src/components/input";

export function Default() {
  return (
    <Field>
      <Field.Label>Email</Field.Label>
      <Input placeholder="you@example.com" type="email" />
      <Field.Helper>We'll never share your email.</Field.Helper>
    </Field>
  );
}
