/** @jsxImportSource solid-js */

import { Sortable } from "@pisagor/solid/sortable";
import { createSignal, For } from "solid-js";

export function Default() {
  const [items, setItems] = createSignal(["One", "Two", "Three"]);

  return (
    <Sortable items={items()} onValueChange={setItems}>
      <For each={items()}>
        {(item) => (
          <Sortable.Item value={item}>
            <Sortable.Handle />
            <Sortable.ItemContent>{item}</Sortable.ItemContent>
          </Sortable.Item>
        )}
      </For>
    </Sortable>
  );
}
