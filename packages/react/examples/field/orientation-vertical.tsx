import source from "./orientation-vertical.tsx?raw";
import { Field, Input } from "@pisagor/react";
export function OrientationVertical() {
  return (
    <Field orientation="vertical">
      <Field.Label>Name</Field.Label>
      <Input placeholder="Enter your name" type="text" />
      <Field.Description>
        Stacks label, control, and description vertically.
      </Field.Description>
    </Field>
  );
}

export { source as OrientationVerticalSource };
