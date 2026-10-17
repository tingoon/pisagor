import source from "./orientation-horizontal.tsx?raw";
import { Field, Switch } from "@pisagor/react";
export function OrientationHorizontal() {
  return (
    <Field orientation="horizontal">
      <Switch />
      <Field.Label>Enable notifications</Field.Label>
    </Field>
  );
}

export { source as OrientationHorizontalSource };
