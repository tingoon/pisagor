import source from "./default.tsx?raw";
import { Checkbox, Field } from "@pisagor/solid";

export function Default() {
  return (
    <Field orientation="horizontal">
      <Checkbox />
      <Field.Label>Accept terms and conditions</Field.Label>
    </Field>
  );
}

export { source as DefaultSource };
