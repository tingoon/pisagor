import { useFilter, useListCollection } from "@ark-ui/solid";
import { CheckIcon } from "@squidlab/phosphor-solid/icons";
import { Autocomplete, Combobox, Field, InputGroup } from "@pisagor/solid";
import { For } from "solid-js";
import { Portal } from "solid-js/web";

const initialItems = [
  { label: "Apple", value: "apple" },
  { label: "Banana", value: "banana" },
  { label: "Orange", value: "orange" },
  { label: "Grape", value: "grape" },
  { label: "Strawberry", value: "strawberry" },
  { label: "Mango", value: "mango" },
  { label: "Pineapple", value: "pineapple" },
  { label: "Kiwi", value: "kiwi" },
  { label: "Peach", value: "peach" },
  { label: "Pear", value: "pear" },
];

export function AutocompleteField() {
  const filterFn = useFilter({ sensitivity: "base" });
  const { collection, filter } = useListCollection({
    filter: filterFn().contains,
    initialItems,
  });

  return (
    <Field>
      <Field.Label>Fruits</Field.Label>
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
                  aria-label="Search items"
                  placeholder="Search items…"
                />
              )}
            />
          </InputGroup>
        </Autocomplete.Control>
        <Portal>
          <Combobox.Positioner>
            <Autocomplete.Content>
              <Autocomplete.Empty>No items found.</Autocomplete.Empty>
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
      <Field.Description>Select an item.</Field.Description>
    </Field>
  );
}
