/** @jsxImportSource solid-js */

import { Sortable } from "@pisagor/solid";
import { createSignal } from "solid-js";

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
      {items().map((id) => (
        <Sortable.Item class="min-w-36" value={id}>
          <Sortable.ItemContent>
            <Sortable.Handle />
            <span class="font-medium text-sm">{labels[id]}</span>
          </Sortable.ItemContent>
        </Sortable.Item>
      ))}
    </Sortable>
  );
}
