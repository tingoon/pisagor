import { Field } from "@pisagor/react";
import { useState } from "react";
import type { CheckboxCheckedState } from "..";
import { Checkbox } from "..";
export function Controlled() {
  const [checked, setChecked] = useState<CheckboxCheckedState>(false);

  return (
    <Field.Group>
      <Field orientation="horizontal">
        <Checkbox checked={checked} onCheckedChange={({ checked }) => setChecked(checked)} />
        <Field.Label>Accept terms and conditions</Field.Label>
      </Field>
      <p className="text-center">{checked ? "✅" : "❌"}</p>
    </Field.Group>
  );
}
