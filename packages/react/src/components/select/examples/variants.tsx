import { createListCollection } from "@ark-ui/react";
import { Select } from "..";

export function Variants() {
  const collection = createListCollection({
    items: ["Apple", "Banana", "Orange"],
  });

  return (
    <div className="flex flex-col gap-2">
      <Select.Root collection={collection} variant="primary">
        <Select.Trigger>
          <Select.ValueText placeholder="Primary" />
        </Select.Trigger>
        <Select.Content>
          {collection.items.map((item) => (
            <Select.Item item={item} key={item}>
              {item}
            </Select.Item>
          ))}
        </Select.Content>
      </Select.Root>
      <Select.Root collection={collection} variant="secondary">
        <Select.Trigger>
          <Select.ValueText placeholder="Secondary" />
        </Select.Trigger>
        <Select.Content>
          {collection.items.map((item) => (
            <Select.Item item={item} key={item}>
              {item}
            </Select.Item>
          ))}
        </Select.Content>
      </Select.Root>
    </div>
  );
}
