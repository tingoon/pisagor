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
