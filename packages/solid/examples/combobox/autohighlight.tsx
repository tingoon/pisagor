import { useListCollection } from "@ark-ui/solid/collection";
import { useFilter } from "@ark-ui/solid/locale";
import { Combobox } from "@pisagor/solid";
import { For } from "solid-js";

export function Autohighlight() {
  const initialItems = [
    { label: "Apple", value: "apple" },
    { label: "Banana", value: "banana" },
    { label: "Cherry", value: "cherry" },
    { label: "Date", value: "date" },
    { label: "Elderberry", value: "elderberry" },
  ];
  const filterFn = useFilter({ sensitivity: "base" });

  const { collection, filter } = useListCollection({
    filter: filterFn().contains,
    initialItems,
  });

  return (
    <Combobox.Root
      collection={collection()}
      inputBehavior="autohighlight"
      onInputValueChange={({ inputValue }) => filter(inputValue)}
    >
      <Combobox.Input placeholder="Type to highlight..." />
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
