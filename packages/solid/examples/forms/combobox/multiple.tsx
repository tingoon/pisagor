import { useListCollection } from "@ark-ui/solid/collection";
import { useFilter } from "@ark-ui/solid/locale";
import { Combobox } from "@pisagor/solid";
import { For } from "solid-js";

export function Multiple() {
  const initialItems = [
    { label: "React", value: "react" },
    { label: "Vue", value: "vue" },
    { label: "Svelte", value: "svelte" },
    { label: "Solid", value: "solid" },
  ];
  const filterFn = useFilter({ sensitivity: "base" });

  const { collection, filter } = useListCollection({
    filter: filterFn().contains,
    initialItems,
  });

  return (
    <Combobox.Root
      collection={collection()}
      multiple
      onInputValueChange={({ inputValue }) => filter(inputValue)}
    >
      <Combobox.Input placeholder="Select frameworks..." />
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
