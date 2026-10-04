/** @jsxImportSource solid-js */

import { NumberInput } from "@pisagor/solid/number-input";
import { createSignal } from "solid-js";
export function Controlled() {
  const [value, setValue] = createSignal("1");

  const isNumberFive = value() === "3";

  return (
    <div class="flex flex-col gap-2 text-center text-sm">
      <p>Select the number 3</p>
      <NumberInput
        onValueChange={(value) => setValue(String(value))}
        value={value()}
      >
        <NumberInput.Control>
          <NumberInput.DecrementTrigger />
          <NumberInput.Input />
          <NumberInput.IncrementTrigger />
        </NumberInput.Control>
      </NumberInput>
      <p class="text-center">{isNumberFive ? "✅" : "❌"}</p>
    </div>
  );
}
