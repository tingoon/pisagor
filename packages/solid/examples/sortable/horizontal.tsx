import source from "./horizontal.tsx?raw";
import { Sortable } from "@pisagor/solid";
import { createSignal, For } from "solid-js";

const labels: Record<string, string> = {
  a: "Design system tokens",
  b: "Component APIs",
  c: "Storybook coverage",
  d: "Accessibility checks",
};

export function Horizontal() {
  const [items, setItems] = createSignal(["a", "b", "c", "d"]);

  return (
    <Sortable items={items()} onValueChange={setItems} orientation="horizontal">
      <For each={items()}>
        {(id) => (
          <Sortable.Item class="min-w-36" value={id}>
            <Sortable.ItemContent>
              <Sortable.Handle />
              <span class="text-sm font-medium">{labels[id]}</span>
            </Sortable.ItemContent>
          </Sortable.Item>
        )}
      </For>
    </Sortable>
  );
}

export { source as HorizontalSource };
