/** @jsxImportSource solid-js */

import { RadioGroup } from "@pisagor/solid";
import { createSignal } from "solid-js";
export function Controlled() {
  const [value, setValue] = createSignal<string | null>(null);

  const isCorrectOption = value() === "comfortable";

  return (
    <div class="flex flex-col items-center gap-2 text-center text-sm">
      <p>Select the option comfortable</p>
      <RadioGroup
        items={[
          { label: "Default", value: "default" },
          { label: "Comfortable", value: "comfortable" },
          { label: "Compact", value: "compact" },
        ]}
        onValueChange={setValue}
        value={value()}
      />
      <p class="text-center">{isCorrectOption ? "✅" : "❌"}</p>
    </div>
  );
}
