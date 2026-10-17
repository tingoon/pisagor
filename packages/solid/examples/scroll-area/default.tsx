import source from "./default.tsx?raw";
import { ScrollArea, Separator } from "@pisagor/solid";
import { For } from "solid-js";

export function Default() {
  const tags = Array.from({ length: 50 }, (_, i) => `v1.0.0-beta.${i}`);

  return (
    <ScrollArea class="h-64 w-48 rounded-md border">
      <div class="p-4">
        <h4 class="mb-4 text-sm leading-none font-medium">Tags</h4>
        <For each={tags}>
          {(tag) => (
            <>
              <div class="text-sm">{tag}</div>
              <Separator class="my-2" />
            </>
          )}
        </For>
      </div>
    </ScrollArea>
  );
}

export { source as DefaultSource };
