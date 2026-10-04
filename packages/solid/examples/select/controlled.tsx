/** @jsxImportSource solid-js */

import { createListCollection } from "@ark-ui/solid/collection";
import { Select } from "@pisagor/solid/select";
import { createSignal } from "solid-js";
export function Controlled() {
  const collection = createListCollection({
    items: [
      { label: "React", value: "react" },
      { label: "Vue", value: "vue" },
      { label: "Svelte", value: "svelte" },
    ],
  });
  const [value, setValue] = createSignal<string[]>(["react"]);

  return (
    <Select.Root
      collection={collection}
      onValueChange={(value) =>
        setValue(Array.isArray(value) ? value : [value])
      }
      value={value()}
    >
      <Select.Trigger>
        <Select.ValueText placeholder="Select a framework" />
      </Select.Trigger>
      <Select.Content>
        {collection.items.map((item) => (
          <Select.Item item={item}>{item.label}</Select.Item>
        ))}
      </Select.Content>
    </Select.Root>
  );
}
