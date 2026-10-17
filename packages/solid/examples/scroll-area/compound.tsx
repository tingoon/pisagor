import source from "./compound.tsx?raw";
import { ScrollArea } from "@pisagor/solid";
import { For } from "solid-js";

const items = Array.from({ length: 30 }, (_, index) => `Item ${index + 1}`);

export function Compound() {
  return (
    <ScrollArea.Root class="h-48 w-64 rounded-md border">
      <ScrollArea.Viewport>
        <div class="p-4 text-sm">
          <For each={items}>{(item) => <p>{item}</p>}</For>
        </div>
      </ScrollArea.Viewport>
      <ScrollArea.Scrollbar orientation="vertical">
        <ScrollArea.Thumb />
      </ScrollArea.Scrollbar>
      <ScrollArea.Corner />
    </ScrollArea.Root>
  );
}

export { source as CompoundSource };
