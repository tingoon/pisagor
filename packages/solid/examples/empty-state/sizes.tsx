import { EmptyState } from "@pisagor/solid";
import { For } from "solid-js";

const sizes = ["sm", "md", "lg"] as const;

export function Sizes() {
  return (
    <div class="flex flex-col gap-4">
      <For each={sizes}>
        {(size) => (
          <EmptyState
            description="No items match your current filters."
            size={size}
            title="No projects found"
          />
        )}
      </For>
    </div>
  );
}
