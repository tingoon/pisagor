/** @jsxImportSource solid-js */
import { useListCollection } from "@ark-ui/solid/collection";
import { useFilter } from "@ark-ui/solid/locale";
import { Combobox } from "@pisagor/solid";

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
    <Combobox.Root
      collection={collection}
      onInputValueChange={({ inputValue }) => filter(inputValue)}
    >
      <Combobox.Input placeholder="Select a timezone" />
      <Combobox.Content class="w-60">
        <Combobox.List>
          {collection.group().map(([continent, group]) => (
            <Combobox.ItemGroup heading={continent}>
              {group.map((item) => (
                <Combobox.Item item={item}>{item.label}</Combobox.Item>
              ))}
            </Combobox.ItemGroup>
          ))}
        </Combobox.List>
      </Combobox.Content>
    </Combobox.Root>
  );
}
