/** @jsxImportSource solid-js */
import { createListCollection } from "@ark-ui/solid/collection";
import { Select } from "@pisagor/solid/select";

export function Invalid() {
  const collection = createListCollection({
    items: [
      { label: "Next.js", value: "next" },
      { label: "Vite", value: "vite" },
      { label: "Astro", value: "astro" },
    ],
  });
  return (
    <Select.Root collection={collection} invalid>
      <Select.Trigger>
        <Select.ValueText placeholder="Select framework" />
      </Select.Trigger>
      <Select.Content>
        {collection.items.map((item) => (
          <Select.Item item={item}>{item.label}</Select.Item>
        ))}
      </Select.Content>
    </Select.Root>
  );
}
