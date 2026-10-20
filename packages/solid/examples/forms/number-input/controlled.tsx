import { NumberInput } from "@pisagor/solid";
import { createSignal } from "solid-js";

export function Controlled() {
  const [value, setValue] = createSignal("1");

  const isNumberThree = value() === "3";

  return (
    <div class="flex flex-col gap-2 text-center text-sm">
      <p>Select the number 3</p>
      <NumberInput
        onValueChange={(value) => setValue(String(value))}
        value={value()}
      />
      <p class="text-center">{isNumberThree ? "✅" : "❌"}</p>
    </div>
  );
}
