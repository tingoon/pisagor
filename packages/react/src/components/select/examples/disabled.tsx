import { createListCollection } from "@ark-ui/react";
import { Select } from "..";

export function Disabled() {
  const collection = createListCollection({
    items: [
      { label: "Next.js", value: "next" },
      { label: "Vite", value: "vite" },
      { label: "Astro", value: "astro" },
    ],
  });
  return (
    <Select.Root collection={collection} disabled>
      <Select.Trigger>
        <Select.ValueText placeholder="Select framework" />
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
