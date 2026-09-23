import { useFilter, useListCollection } from "@ark-ui/react";
import { Combobox } from "..";

export function Variants() {
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
    <div className="flex flex-col gap-2">
      <Combobox.Root
        collection={collection}
        onInputValueChange={({ inputValue }) => filter(inputValue)}
        variant="primary"
      >
        <Combobox.Input placeholder="Primary" />
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
      <Combobox.Root
        collection={collection}
        onInputValueChange={({ inputValue }) => filter(inputValue)}
        variant="secondary"
      >
        <Combobox.Input placeholder="Secondary" />
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
    </div>
  );
}
