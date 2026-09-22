import { createListCollection } from "@ark-ui/react";
import { useState } from "react";
import { Select } from "..";

export function Controlled() {
  const collection = createListCollection({
    items: [
      { label: "React", value: "react" },
      { label: "Vue", value: "vue" },
      { label: "Svelte", value: "svelte" },
    ],
  });
  const [value, setValue] = useState<string[]>(["react"]);

  return (
    <Select.Root
      collection={collection}
      onValueChange={(value) => setValue(Array.isArray(value) ? value : [value])}
      value={value}
    >
      <Select.Trigger>
        <Select.ValueText placeholder="Select a framework" />
      </Select.Trigger>
      <Select.Content>
        {collection.items.map((item) => (
          <Select.Item item={item} key={item.value}>
            {item.label}
          </Select.Item>
        ))}
      </Select.Content>
    </Select.Root>
  );
}
