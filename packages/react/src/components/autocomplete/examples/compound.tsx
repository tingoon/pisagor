import { useFilter, useListCollection } from "@ark-ui/react";
import { Autocomplete } from "..";

export function Compound() {
  const initialItems = [
    { label: "Apple", value: "apple" },
    { label: "Banana", value: "banana" },
    { label: "Cherry", value: "cherry" },
    { label: "Date", value: "date" },
  ];
  const { contains } = useFilter({ sensitivity: "base" });

  const { collection, filter } = useListCollection({
    filter: contains,
    initialItems,
  });

  return (
    <Autocomplete.Root
      collection={collection}
      onInputValueChange={({ inputValue }) => filter(inputValue)}
    >
      <Autocomplete.Input clearable placeholder="for example, Apple" />
      <Autocomplete.Content>
        <Autocomplete.Empty />
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
