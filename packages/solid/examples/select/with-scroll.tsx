/** @jsxImportSource solid-js */
import { createListCollection } from "@ark-ui/solid/collection";
import { Select } from "@pisagor/solid";

export function WithScroll() {
  const collection = createListCollection({
    items: Array.from({ length: 20 }, (_, i) => ({
      label: `Framework ${i + 1}`,
      value: `framework-${i + 1}`,
    })),
  });
  return (
    <Select.Root collection={collection} positioning={{ fitViewport: true }}>
      <Select.Trigger>
        <Select.ValueText placeholder="Select framework" />
      </Select.Trigger>
      <Select.Content class="max-h-56">
        {collection.items.map((item) => (
          <Select.Item item={item}>{item.label}</Select.Item>
        ))}
      </Select.Content>
    </Select.Root>
  );
}
