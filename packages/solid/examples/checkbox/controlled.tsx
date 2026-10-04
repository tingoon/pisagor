/** @jsxImportSource solid-js */

import { Field } from "@pisagor/solid";
import type { CheckboxCheckedState } from "@pisagor/solid/checkbox";
import { Checkbox } from "@pisagor/solid/checkbox";
import { createSignal } from "solid-js";
export function Controlled() {
  const [checked, setChecked] = createSignal<CheckboxCheckedState>(false);

  return (
    <Field.Group>
      <Field orientation="horizontal">
        <Checkbox
          checked={checked()}
          onCheckedChange={({ checked }) => setChecked(checked)}
        />
        <Field.Label>Accept terms and conditions</Field.Label>
      </Field>
      <p class="text-center">{checked() ? "✅" : "❌"}</p>
    </Field.Group>
  );
}
