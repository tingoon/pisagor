import { useFilter, useListCollection } from "@ark-ui/react";
import { Autocomplete } from "..";

export function Group() {
  const initialItems = [
    { continent: "North America", label: "Canada", value: "ca" },
    { continent: "North America", label: "United States", value: "us" },
    { continent: "North America", label: "Mexico", value: "mx" },
    { continent: "Europe", label: "United Kingdom", value: "uk" },
    { continent: "Europe", label: "Germany", value: "de" },
    { continent: "Europe", label: "France", value: "fr" },
    { continent: "Asia", label: "Japan", value: "jp" },
    { continent: "Asia", label: "South Korea", value: "kr" },
    { continent: "Asia", label: "China", value: "cn" },
  ];
  const { contains } = useFilter({ sensitivity: "base" });

  const { collection, filter } = useListCollection({
    filter: contains,
    groupBy: (item) => item.continent,
    initialItems,
  });

  return (
    <Autocomplete.Root
      collection={collection}
      onInputValueChange={({ inputValue }) => filter(inputValue)}
    >
      <Autocomplete.Input placeholder="Select a timezone" />
      <Autocomplete.Content className="w-60">
        <Autocomplete.Empty />
        <Autocomplete.List>
          {collection.group().map(([continent, group]) => (
            <Autocomplete.ItemGroup heading={continent} key={continent}>
              {group.map((item) => (
                <Autocomplete.Item item={item} key={item.value}>
                  {item.label}
                </Autocomplete.Item>
              ))}
            </Autocomplete.ItemGroup>
          ))}
        </Autocomplete.List>
      </Autocomplete.Content>
    </Autocomplete.Root>
  );
}
