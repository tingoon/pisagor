import type { CheckboxCheckedState } from "@pisagor/react";
import { Checkbox, Field } from "@pisagor/react";
import { useState } from "react";
export function Controlled() {
  const [checked, setChecked] = useState<CheckboxCheckedState>(false);

  return (
    <Field.Group>
      <Field orientation="horizontal">
        <Checkbox
          checked={checked}
          onCheckedChange={({ checked }) => setChecked(checked)}
        />
        <Field.Label>Accept terms and conditions</Field.Label>
      </Field>
      <p className="text-center">{checked ? "✅" : "❌"}</p>
    </Field.Group>
  );
}
