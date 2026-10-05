import { Sortable } from "@pisagor/solid";
import { createSignal } from "solid-js";

const labels: Record<string, string> = {
  a: "Design system tokens",
  b: "Component APIs",
  c: "Storybook coverage",
  d: "Accessibility checks",
};

export function Disabled() {
  const [items, setItems] = createSignal(["a", "b", "c"]);

  return (
    <Sortable disabled items={items()} onValueChange={setItems}>
      {items().map((id) => (
        <Sortable.Item value={id}>
          <Sortable.ItemContent>
            <Sortable.Handle />
            <span class="font-medium text-sm">{labels[id]}</span>
          </Sortable.ItemContent>
        </Sortable.Item>
      ))}
    </Sortable>
  );
}
