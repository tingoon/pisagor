import { useListCollection } from "@ark-ui/solid/collection";
import { useFilter } from "@ark-ui/solid/locale";
import { Autocomplete } from "@pisagor/solid";
import { For } from "solid-js";

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
  const filterFn = useFilter({ sensitivity: "base" });

  const { collection, filter } = useListCollection({
    filter: filterFn().contains,
    groupBy: (item) => item.continent,
    initialItems,
  });

  return (
    <Autocomplete.Root
      collection={collection()}
      onInputValueChange={({ inputValue }) => filter(inputValue)}
    >
      <Autocomplete.Input placeholder="Select a timezone" />
      <Autocomplete.Content class="w-60">
        <Autocomplete.Empty />
        <Autocomplete.List>
          <For each={collection().group()}>
            {([continent, group]) => (
              <Autocomplete.ItemGroup heading={continent}>
                <For each={group}>
                  {(item) => (
                    <Autocomplete.Item item={item}>
                      {item.label}
                    </Autocomplete.Item>
                  )}
                </For>
              </Autocomplete.ItemGroup>
            )}
          </For>
        </Autocomplete.List>
      </Autocomplete.Content>
    </Autocomplete.Root>
  );
}
