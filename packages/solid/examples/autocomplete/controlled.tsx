/** @jsxImportSource solid-js */

import { useListCollection } from "@ark-ui/solid/collection";
import { useFilter } from "@ark-ui/solid/locale";
import { Autocomplete } from "@pisagor/solid/autocomplete";
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
      <Autocomplete.Root
        class="w-full"
        collection={collection}
        onInputValueChange={({ inputValue }) => filter(inputValue)}
        onValueChange={(value) => setValue(value().at(0))}
        value={value() ? [value] : []}
      >
        <Autocomplete.Input placeholder="Select a fruit..." />
        <Autocomplete.Content>
          <Autocomplete.Empty />
          <Autocomplete.List>
            {collection.items.map((item) => (
              <Autocomplete.Item item={item}>{item.label}</Autocomplete.Item>
            ))}
          </Autocomplete.List>
        </Autocomplete.Content>
      </Autocomplete.Root>
      <p class="text-center text-muted-foreground text-sm">
        Selected: {value() ?? "(none)"}
      </p>
    </div>
  );
}
