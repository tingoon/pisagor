import source from "./sizes.tsx?raw";
import { Skeleton } from "@pisagor/solid";
import { For } from "solid-js";

const sizes = ["sm", "md", "lg"] as const;

export function Sizes() {
  return (
    <div class="flex flex-col gap-4">
      <For each={sizes}>
        {(size) => (
          <div class="flex items-center gap-2">
            <Skeleton.Circle size={size} />
            <Skeleton.Text lines={2} size={size} />
          </div>
        )}
      </For>
    </div>
  );
}

export { source as SizesSource };
