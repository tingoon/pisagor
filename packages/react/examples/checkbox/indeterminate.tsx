import source from "./indeterminate.tsx?raw";
import { Checkbox, Field } from "@pisagor/react";
export function Indeterminate() {
  return (
    <Field.Group>
      <Field orientation="horizontal">
        <Checkbox />
        <Field.Content>
          <Field.Label>Select all items</Field.Label>
        </Field.Content>
      </Field>
    </Field.Group>
  );
}

export { source as IndeterminateSource };
