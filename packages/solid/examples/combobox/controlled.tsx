/** @jsxImportSource solid-js */

import { useListCollection } from "@ark-ui/solid/collection";
import { useFilter } from "@ark-ui/solid/locale";
import { Combobox } from "@pisagor/solid";
import { createSignal } from "solid-js";
export function Controlled() {
  const initialItems = [
    { label: "Apple", value: "apple" },
    { label: "Banana", value: "banana" },
    { label: "Cherry", value: "cherry" },
    { label: "Date", value: "date" },
  ];
  const [value, setValue] = createSignal<string | undefined>("banana");

  const { contains } = useFilter({ sensitivity: "base" });

  const { collection, filter } = useListCollection({
    filter: contains,
    initialItems,
  });

  return (
    <div class="flex flex-col gap-2">
      <Combobox.Root
        class="w-full"
        collection={collection}
        inputValue={value()}
        onInputValueChange={({ inputValue }) => filter(inputValue)}
        onValueChange={(value) => setValue(value()[0])}
      >
        <Combobox.Input placeholder="Select a fruit..." />
        <Combobox.Content>
          <Combobox.List>
            {collection.items.map((item) => (
              <Combobox.Item item={item}>{item.label}</Combobox.Item>
            ))}
          </Combobox.List>
        </Combobox.Content>
      </Combobox.Root>
      <p class="text-center text-muted-foreground text-sm">
        Selected: {value() ?? "(none)"}
      </p>
    </div>
  );
}
