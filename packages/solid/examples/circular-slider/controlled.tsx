/** @jsxImportSource solid-js */

import { CircularSlider } from "@pisagor/solid";
import { createSignal } from "solid-js";
export function Controlled() {
  const [value, setValue] = createSignal(45);

  return (
    <div class="flex flex-col gap-2">
      <div class="text-muted-foreground text-sm">More than: 180</div>
      <CircularSlider
        aria-label="Angle"
        onValueChange={setValue}
        value={value()}
      />
      <div class="text-center text-muted-foreground text-sm">
        {value() > 180 ? "✅" : "❌"}
      </div>
    </div>
  );
}
