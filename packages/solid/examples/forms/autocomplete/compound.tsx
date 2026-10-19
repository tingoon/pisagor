import { useFilter, useListCollection } from "@ark-ui/solid";
import { CheckIcon } from "@squidlab/phosphor-solid/icons";
import { Autocomplete, Combobox, InputGroup } from "@pisagor/solid";
import { For } from "solid-js";
import { Portal } from "solid-js/web";

export function Compound() {
  const initialItems = [
    { label: "Apple", value: "apple" },
    { label: "Banana", value: "banana" },
    { label: "Cherry", value: "cherry" },
    { label: "Date", value: "date" },
  ];
  const filterFn = useFilter({ sensitivity: "base" });
  const { collection, filter } = useListCollection({
    filter: filterFn().contains,
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
                placeholder="for example, Apple"
              />
            )}
          />
        </InputGroup>
      </Autocomplete.Control>
      <Portal>
        <Combobox.Positioner>
          <Autocomplete.Content>
            <Autocomplete.Empty>
              No results found. Try a different search.
            </Autocomplete.Empty>
            <Autocomplete.List>
              <For each={collection().items}>
                {(item) => (
                  <Autocomplete.Item item={item} persistFocus>
                    {item.label}
                    <Combobox.ItemIndicator>
                      <CheckIcon />
                    </Combobox.ItemIndicator>
                  </Autocomplete.Item>
                )}
              </For>
            </Autocomplete.List>
          </Autocomplete.Content>
        </Combobox.Positioner>
      </Portal>
    </Autocomplete.Root>
  );
}
