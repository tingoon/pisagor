import { useListCollection } from "@ark-ui/solid/collection";
import { useFilter } from "@ark-ui/solid/locale";
import { Combobox } from "@pisagor/solid";
import { For } from "solid-js";

export function WithScroll() {
  const initialItems = Array.from({ length: 30 }, (_, i) => ({
    label: `Option ${i + 1}`,
    value: `option-${i + 1}`,
  }));
  const filterFn = useFilter({ sensitivity: "base" });

  const { collection, filter } = useListCollection({
    filter: filterFn().contains,
    initialItems,
  });

  return (
    <Combobox.Root
      collection={collection()}
      onInputValueChange={({ inputValue }) => filter(inputValue)}
    >
      <Combobox.Input placeholder="Search..." />
      <Combobox.Content class="max-h-60">
        <Combobox.List>
          <For each={collection().items}>
            {(item) => <Combobox.Item item={item}>{item.label}</Combobox.Item>}
          </For>
        </Combobox.List>
      </Combobox.Content>
    </Combobox.Root>
  );
}
