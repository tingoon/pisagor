import { Portal, useFilter, useListCollection } from "@ark-ui/react";
import { CaretUpDownIcon, CheckIcon } from "@phosphor-icons/react";
import { Autocomplete, Combobox, InputGroup } from "@pisagor/react";

export function WithTrigger() {
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
    <Autocomplete.Root
      collection={collection}
      onInputValueChange={({ inputValue }) => filter(inputValue)}
    >
      <Autocomplete.Control>
        <InputGroup>
          <Autocomplete.Input asChild>
            <InputGroup.Input placeholder="Select a fruit..." />
          </Autocomplete.Input>
          <InputGroup.Addon align="inline-end">
            <InputGroup.Button asChild size="icon-xs" variant="ghost">
              <Autocomplete.Trigger>
                <CaretUpDownIcon aria-hidden />
              </Autocomplete.Trigger>
            </InputGroup.Button>
          </InputGroup.Addon>
        </InputGroup>
      </Autocomplete.Control>
      <Portal>
        <Combobox.Positioner>
          <Autocomplete.Content>
            <Autocomplete.Empty>
              No results found. Try a different search.
            </Autocomplete.Empty>
            <Autocomplete.List>
              {collection.items.map((item) => (
                <Autocomplete.Item item={item} key={item.value} persistFocus>
                  {item.label}
                  <Combobox.ItemIndicator>
                    <CheckIcon />
                  </Combobox.ItemIndicator>
                </Autocomplete.Item>
              ))}
            </Autocomplete.List>
          </Autocomplete.Content>
        </Combobox.Positioner>
      </Portal>
    </Autocomplete.Root>
  );
}
