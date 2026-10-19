import { useFilter, useListCollection } from "@ark-ui/solid";
import { CheckIcon } from "@squidlab/phosphor-solid/icons";
import { Autocomplete, Combobox, InputGroup } from "@pisagor/solid";
import { For } from "solid-js";
import { Portal } from "solid-js/web";

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
      <Autocomplete.Control>
        <InputGroup>
          <Autocomplete.Input
            asChild={(inputProps) => (
              <InputGroup.Input
                {...inputProps()}
                placeholder="Select a timezone"
              />
            )}
          />
        </InputGroup>
      </Autocomplete.Control>
      <Portal>
        <Combobox.Positioner>
          <Autocomplete.Content class="w-60">
            <Autocomplete.Empty>
              No results found. Try a different search.
            </Autocomplete.Empty>
            <Autocomplete.List>
              <For each={collection().group()}>
                {([continent, group]) => (
                  <Autocomplete.ItemGroup>
                    <Autocomplete.ItemGroupLabel>
                      {continent}
                    </Autocomplete.ItemGroupLabel>
                    <For each={group}>
                      {(item) => (
                        <Autocomplete.Item item={item} persistFocus>
                          {item.label}
                          <Combobox.ItemIndicator>
                            <CheckIcon />
                          </Combobox.ItemIndicator>
                        </Autocomplete.Item>
                      )}
                    </For>
                  </Autocomplete.ItemGroup>
                )}
              </For>
            </Autocomplete.List>
          </Autocomplete.Content>
        </Combobox.Positioner>
      </Portal>
    </Autocomplete.Root>
  );
}
