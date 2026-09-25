import { Input } from "../../input";
import { Field } from "../index";

export function Default() {
  return (
    <Field>
      <Field.Label>Email</Field.Label>
      <Input placeholder="you@example.com" type="email" />
      <Field.Helper>We'll never share your email.</Field.Helper>
    </Field>
  );
}
