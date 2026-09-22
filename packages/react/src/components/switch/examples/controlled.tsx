import { Field } from "@pisagor/react";
import { useState } from "react";
import { Switch } from "..";
export function Controlled() {
  const [checked, setChecked] = useState(false);

  return (
    <Field.Group className="flex flex-col items-center gap-2">
      <Field orientation="horizontal">
        <Switch checked={checked} onCheckedChange={({ checked }) => setChecked(checked ?? false)} />
        <Field.Content>
          <Field.Label>Enable notifications</Field.Label>
        </Field.Content>
      </Field>
      <p className="text-center">{checked ? "✅" : "❌"}</p>
    </Field.Group>
  );
}
