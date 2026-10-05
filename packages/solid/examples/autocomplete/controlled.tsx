import { useListCollection } from "@ark-ui/solid/collection";
import { useFilter } from "@ark-ui/solid/locale";
import { Autocomplete } from "@pisagor/solid";
import { createSignal, For } from "solid-js";

export function Controlled() {
  const initialItems = [
    { label: "Apple", value: "apple" },
    { label: "Banana", value: "banana" },
    { label: "Cherry", value: "cherry" },
    { label: "Date", value: "date" },
  ];
  const [value, setValue] = createSignal<string | undefined>("banana");
  const selected = () => {
    const current = value();
    return current ? [current] : [];
  };

  const filterFn = useFilter({ sensitivity: "base" });

  const { collection, filter } = useListCollection({
    filter: filterFn().contains,
    initialItems,
  });

  return (
    <div class="flex flex-col gap-2">
      <Autocomplete.Root
        class="w-full"
        collection={collection()}
        onInputValueChange={({ inputValue }) => filter(inputValue)}
        onValueChange={(next) => setValue(next.at(0))}
        value={selected()}
      >
        <Autocomplete.Input placeholder="Select a fruit..." />
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
      <p class="text-center text-muted-foreground text-sm">
        Selected: {value() ?? "(none)"}
      </p>
    </div>
  );
}
