import { useFilter, useListCollection } from "@ark-ui/react";
import { Command } from "..";

export function Groups() {
  const initialItems = [
    { group: "Fruit", label: "Apple", value: "apple" },
    { group: "Fruit", label: "Banana", value: "banana" },
    { group: "Fruit", label: "Cherry", value: "cherry" },
    { group: "Countries", label: "United States", value: "us" },
    { group: "Countries", label: "United Kingdom", value: "uk" },
    { group: "Countries", label: "Germany", value: "de" },
  ];
  const { contains } = useFilter({ sensitivity: "base" });

  const { collection, filter } = useListCollection({
    filter: contains,
    groupBy: (item) => item.group,
    initialItems,
  });

  return (
    <Command
      collection={collection}
      onInputValueChange={({ inputValue }) => filter(inputValue)}
    >
      <Command.Input placeholder="Search..." />
      <Command.Content>
        <Command.Empty />
        <Command.List>
          {collection.group().map(([group, items], index) => (
            <>
              {index !== 0 && <Command.Separator />}
              <Command.ItemGroup heading={group} key={group}>
                {items.map((item) => (
                  <Command.Item item={item} key={item.value}>
                    {item.label}
                  </Command.Item>
                ))}
              </Command.ItemGroup>
            </>
          ))}
        </Command.List>
      </Command.Content>
    </Command>
  );
}
