import { Clipboard } from "@pisagor/solid";
import { For } from "solid-js";

const sizes = ["sm", "md", "lg"] as const;

export function Sizes() {
  return (
    <div class="flex flex-col gap-2">
      <For each={sizes}>
        {(size) => <Clipboard size={size} value="https://example.com/docs" />}
      </For>
    </div>
  );
}
