import { Sortable } from "@pisagor/solid";
import { createSignal, For } from "solid-js";

const labels: Record<string, string> = {
  a: "Design system tokens",
  b: "Component APIs",
  c: "Storybook coverage",
  d: "Accessibility checks",
};

export function WithoutHandle() {
  const [items, setItems] = createSignal(["a", "b", "c"]);

  return (
    <Sortable items={items()} onValueChange={setItems}>
      <For each={items()}>
        {(id) => (
          <Sortable.Item value={id}>
            <Sortable.ItemContent>
              <span class="font-medium text-sm">{labels[id]}</span>
            </Sortable.ItemContent>
          </Sortable.Item>
        )}
      </For>
    </Sortable>
  );
}
