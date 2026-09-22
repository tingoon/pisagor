import { createListCollection } from "@ark-ui/react";
import { Select } from "..";

export function Compound() {
  const collection = createListCollection({
    items: ["Banana", "Apple", "Orange", "Pineapple"],
  });
  return (
    <Select.Root collection={collection}>
      <Select.Trigger>
        <Select.ValueText placeholder="Select a fruit" />
      </Select.Trigger>
      <Select.Content>
        <Select.ItemGroup heading="Fruits">
          {collection.items.map((item) => (
            <Select.Item item={item} key={item}>
              {item}
            </Select.Item>
          ))}
        </Select.ItemGroup>
      </Select.Content>
    </Select.Root>
  );
}
