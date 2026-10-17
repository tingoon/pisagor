import { useListCollection } from "@ark-ui/solid/collection";
import { useFilter } from "@ark-ui/solid/locale";
import { Combobox } from "@pisagor/solid";
import { For } from "solid-js";

export function Invalid() {
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
    <Combobox.Root
      collection={collection()}
      invalid
      onInputValueChange={({ inputValue }) => filter(inputValue)}
    >
      <Combobox.Input placeholder="Select a fruit..." />
      <Combobox.Content>
        <Combobox.List>
          <For each={collection().items}>
            {(item) => <Combobox.Item item={item}>{item.label}</Combobox.Item>}
          </For>
        </Combobox.List>
      </Combobox.Content>
    </Combobox.Root>
  );
}
