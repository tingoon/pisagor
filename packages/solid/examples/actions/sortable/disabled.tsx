import { DotsSixVerticalIcon } from "@squidlab/phosphor-solid/icons";
import { Sortable } from "@pisagor/solid";
import { createSignal, For } from "solid-js";

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
      <For each={items()}>
        {(id) => (
          <Sortable.Item value={id}>
            <Sortable.ItemContent>
              <Sortable.Handle>
                <DotsSixVerticalIcon />
              </Sortable.Handle>
              <span class="text-sm font-medium">{labels[id]}</span>
            </Sortable.ItemContent>
          </Sortable.Item>
        )}
      </For>
    </Sortable>
  );
}
