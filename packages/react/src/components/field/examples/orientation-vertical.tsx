import { Input } from "@pisagor/react";
import { Field } from "..";
export function OrientationVertical() {
  return (
    <Field orientation="vertical">
      <Field.Label>Name</Field.Label>
      <Input placeholder="Enter your name" type="text" />
      <Field.Description>Stacks label, control, and description vertically.</Field.Description>
    </Field>
  );
}
