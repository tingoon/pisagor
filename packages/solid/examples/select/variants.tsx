/** @jsxImportSource solid-js */
import { createListCollection } from "@ark-ui/solid/collection";
import { Select } from "@pisagor/solid";

export function Variants() {
  const collection = createListCollection({
    items: ["Apple", "Banana", "Orange"],
  });

  return (
    <div class="flex flex-col gap-2">
      <Select.Root collection={collection} variant="primary">
        <Select.Trigger>
          <Select.ValueText placeholder="Primary" />
        </Select.Trigger>
        <Select.Content>
          {collection.items.map((item) => (
            <Select.Item item={item}>{item}</Select.Item>
          ))}
        </Select.Content>
      </Select.Root>
      <Select.Root collection={collection} variant="secondary">
        <Select.Trigger>
          <Select.ValueText placeholder="Secondary" />
        </Select.Trigger>
        <Select.Content>
          {collection.items.map((item) => (
            <Select.Item item={item}>{item}</Select.Item>
          ))}
        </Select.Content>
      </Select.Root>
    </div>
  );
}
