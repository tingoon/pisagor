import source from "./default.tsx?raw";
import { Field, Input } from "@pisagor/solid";

export function Default() {
  return (
    <Field>
      <Field.Label>Email</Field.Label>
      <Input placeholder="you@example.com" type="email" />
      <Field.Helper>We'll never share your email.</Field.Helper>
    </Field>
  );
}

export { source as DefaultSource };
