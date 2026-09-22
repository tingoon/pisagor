import { useFilter, useListCollection } from "@ark-ui/react";
import { Combobox } from "..";

export function WithScroll() {
  const initialItems = Array.from({ length: 30 }, (_, i) => ({
    label: `Option ${i + 1}`,
    value: `option-${i + 1}`,
  }));
  const { contains } = useFilter({ sensitivity: "base" });

  const { collection, filter } = useListCollection({
    filter: contains,
    initialItems,
  });

  return (
    <Combobox.Root
      collection={collection}
      onInputValueChange={({ inputValue }) => filter(inputValue)}
    >
      <Combobox.Input placeholder="Search..." />
      <Combobox.Content className="max-h-60">
        <Combobox.List>
          {collection.items.map((item) => (
            <Combobox.Item item={item} key={item.value}>
              {item.label}
            </Combobox.Item>
          ))}
        </Combobox.List>
      </Combobox.Content>
    </Combobox.Root>
  );
}
