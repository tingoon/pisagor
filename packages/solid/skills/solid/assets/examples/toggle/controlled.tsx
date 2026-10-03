/** @jsxImportSource solid-js */

import { Toggle } from "@pisagor/solid/toggle";
import { createSignal } from "solid-js";
export function Controlled() {
  const [pressed, setPressed] = createSignal(false);

  return (
    <div class="flex flex-col items-center gap-2">
      <Toggle
        onPressedChange={setPressed}
        pressed={pressed()}
        variant="outline"
      >
        Toggle
      </Toggle>
      <p class="text-muted-foreground text-sm">{pressed() ? "✅" : "❌"}</p>
    </div>
  );
}
