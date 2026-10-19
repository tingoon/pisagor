import { Portal, useFilter, useListCollection } from "@ark-ui/react";
import { CheckIcon } from "@phosphor-icons/react";
import { Autocomplete, Combobox, InputGroup } from "@pisagor/react";

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
      <Autocomplete.Control>
        <InputGroup>
          <Autocomplete.Input asChild>
            <InputGroup.Input placeholder="Select a timezone" />
          </Autocomplete.Input>
        </InputGroup>
      </Autocomplete.Control>
      <Portal>
        <Combobox.Positioner>
          <Autocomplete.Content className="w-60">
            <Autocomplete.Empty>
              No results found. Try a different search.
            </Autocomplete.Empty>
            <Autocomplete.List>
              {collection.group().map(([continent, group]) => (
                <Autocomplete.ItemGroup key={continent}>
                  <Autocomplete.ItemGroupLabel>
                    {continent}
                  </Autocomplete.ItemGroupLabel>
                  {group.map((item) => (
                    <Autocomplete.Item
                      item={item}
                      key={item.value}
                      persistFocus
                    >
                      {item.label}
                      <Combobox.ItemIndicator>
                        <CheckIcon />
                      </Combobox.ItemIndicator>
                    </Autocomplete.Item>
                  ))}
                </Autocomplete.ItemGroup>
              ))}
            </Autocomplete.List>
          </Autocomplete.Content>
        </Combobox.Positioner>
      </Portal>
    </Autocomplete.Root>
  );
}
