import { useListCollection } from "@ark-ui/solid/collection";
import { useFilter } from "@ark-ui/solid/locale";
import { Combobox } from "@pisagor/solid";
import { createSignal, For } from "solid-js";

export function Controlled() {
  const initialItems = [
    { label: "Apple", value: "apple" },
    { label: "Banana", value: "banana" },
    { label: "Cherry", value: "cherry" },
    { label: "Date", value: "date" },
  ];
  const [value, setValue] = createSignal<string | undefined>("banana");

  const filterFn = useFilter({ sensitivity: "base" });

  const { collection, filter } = useListCollection({
    filter: filterFn().contains,
    initialItems,
  });

  return (
    <div class="flex flex-col gap-2">
      <Combobox.Root
        class="w-full"
        collection={collection()}
        inputValue={value()}
        onInputValueChange={({ inputValue }) => filter(inputValue)}
        onValueChange={(next) => setValue(next[0])}
      >
        <Combobox.Input placeholder="Select a fruit..." />
        <Combobox.Content>
          <Combobox.List>
            <For each={collection().items}>
              {(item) => (
                <Combobox.Item item={item}>{item.label}</Combobox.Item>
              )}
            </For>
          </Combobox.List>
        </Combobox.Content>
      </Combobox.Root>
      <p class="text-center text-muted-foreground text-sm">
        Selected: {value() ?? "(none)"}
      </p>
    </div>
  );
}
