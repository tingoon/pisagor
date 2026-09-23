import { createListCollection } from "@ark-ui/react";
import { Select } from "..";

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
      <Select.Content className="max-h-56">
        {collection.items.map((item) => (
          <Select.Item item={item} key={item.value}>
            {item.label}
          </Select.Item>
        ))}
      </Select.Content>
    </Select.Root>
  );
}
