import { useListCollection } from "@ark-ui/solid/collection";
import { useFilter } from "@ark-ui/solid/locale";
import { Autocomplete } from "@pisagor/solid";
import { For } from "solid-js";

export function WithTrigger() {
  const initialItems = [
    { label: "Apple", value: "apple" },
    { label: "Banana", value: "banana" },
    { label: "Cherry", value: "cherry" },
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
      <Autocomplete.Input placeholder="Select a fruit..." showTrigger />
      <Autocomplete.Content>
        <Autocomplete.Empty />
        <Autocomplete.List>
          <For each={collection().items}>
            {(item) => (
              <Autocomplete.Item item={item}>{item.label}</Autocomplete.Item>
            )}
          </For>
        </Autocomplete.List>
      </Autocomplete.Content>
    </Autocomplete.Root>
  );
}
