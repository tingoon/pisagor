import source from "./sizes.tsx?raw";
import { Frame } from "@pisagor/solid";
import { For } from "solid-js";

const sizes = ["sm", "md", "lg"] as const;

export function Sizes() {
  return (
    <div class="flex flex-col gap-4">
      <For each={sizes}>
        {(size) => (
          <Frame size={size}>
            <Frame.Header>
              <Frame.Title>Section {size}</Frame.Title>
            </Frame.Header>
            <Frame.Panel>
              <p class="text-muted-foreground text-sm">Section content</p>
            </Frame.Panel>
          </Frame>
        )}
      </For>
    </div>
  );
}

export { source as SizesSource };
