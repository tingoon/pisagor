/** @jsxImportSource solid-js */

import { Field, Slider } from "@pisagor/solid";
import { createSignal } from "solid-js";
export function Controlled() {
  const [value, setValue] = createSignal<number[]>([40]);

  const isGreaterThan80 = (value()[0] ?? 0) > 80;

  return (
    <div class="flex flex-col gap-2">
      <p class="text-center text-sm">Greater than 80</p>
      <Field>
        <Slider
          label="Temperature"
          onValueChange={setValue}
          showValue
          value={value()}
        />
      </Field>
      <p class="text-center">{isGreaterThan80 ? "✅" : "❌"}</p>
    </div>
  );
}
