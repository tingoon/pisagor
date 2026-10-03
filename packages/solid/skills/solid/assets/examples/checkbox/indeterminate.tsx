/** @jsxImportSource solid-js */
import { Field } from "@pisagor/solid";
import { Checkbox } from "@pisagor/solid/checkbox";
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
