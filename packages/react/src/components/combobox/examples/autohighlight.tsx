import { useFilter, useListCollection } from "@ark-ui/react";
import { Combobox } from "..";

export function Autohighlight() {
  const initialItems = [
    { label: "Apple", value: "apple" },
    { label: "Banana", value: "banana" },
    { label: "Cherry", value: "cherry" },
    { label: "Date", value: "date" },
    { label: "Elderberry", value: "elderberry" },
  ];
  const { contains } = useFilter({ sensitivity: "base" });

  const { collection, filter } = useListCollection({
    filter: contains,
    initialItems,
  });

  return (
    <Combobox.Root
      collection={collection}
      inputBehavior="autohighlight"
      onInputValueChange={({ inputValue }) => filter(inputValue)}
    >
      <Combobox.Input placeholder="Type to highlight..." />
      <Combobox.Content>
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
