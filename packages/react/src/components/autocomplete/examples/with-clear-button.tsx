import { useFilter, useListCollection } from "@ark-ui/react";
import { Autocomplete } from "..";

export function WithClearButton() {
  const initialItems = [
    { label: "Apple", value: "apple" },
    { label: "Banana", value: "banana" },
    { label: "Cherry", value: "cherry" },
  ];
  const { contains } = useFilter({ sensitivity: "base" });

  const { collection, filter } = useListCollection({
    filter: contains,
    initialItems,
  });

  return (
    <Autocomplete.Root
      collection={collection}
      defaultValue={["apple"]}
      onInputValueChange={({ inputValue }) => filter(inputValue)}
    >
      <Autocomplete.Input clearable placeholder="Select a fruit..." />
      <Autocomplete.Content>
        <Autocomplete.Empty>No items found.</Autocomplete.Empty>
        <Autocomplete.List>
          {collection.items.map((item) => (
            <Autocomplete.Item item={item} key={item.value}>
              {item.label}
            </Autocomplete.Item>
          ))}
        </Autocomplete.List>
      </Autocomplete.Content>
    </Autocomplete.Root>
  );
}
