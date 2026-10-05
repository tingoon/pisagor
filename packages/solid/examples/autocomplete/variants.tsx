import { useListCollection } from "@ark-ui/solid/collection";
import { useFilter } from "@ark-ui/solid/locale";
import { Autocomplete } from "@pisagor/solid";
import { For } from "solid-js";

export function Variants() {
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
    <div class="flex flex-col gap-2">
      <Autocomplete.Root
        collection={collection()}
        onInputValueChange={({ inputValue }) => filter(inputValue)}
      >
        <Autocomplete.Input placeholder="Primary" variant="primary" />
        <Autocomplete.Content>
          <Autocomplete.List>
            <For each={collection().items}>
              {(item) => (
                <Autocomplete.Item item={item}>{item.label}</Autocomplete.Item>
              )}
            </For>
          </Autocomplete.List>
        </Autocomplete.Content>
      </Autocomplete.Root>
      <Autocomplete.Root
        collection={collection()}
        onInputValueChange={({ inputValue }) => filter(inputValue)}
      >
        <Autocomplete.Input placeholder="Secondary" variant="secondary" />
        <Autocomplete.Content>
          <Autocomplete.List>
            <For each={collection().items}>
              {(item) => (
                <Autocomplete.Item item={item}>{item.label}</Autocomplete.Item>
              )}
            </For>
          </Autocomplete.List>
        </Autocomplete.Content>
      </Autocomplete.Root>
    </div>
  );
}
