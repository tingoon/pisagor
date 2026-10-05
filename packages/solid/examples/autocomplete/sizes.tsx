import { useListCollection } from "@ark-ui/solid/collection";
import { useFilter } from "@ark-ui/solid/locale";
import { Autocomplete } from "@pisagor/solid";
import { For } from "solid-js";

const initialItems = [
  { label: "Apple", value: "apple" },
  { label: "Banana", value: "banana" },
  { label: "Cherry", value: "cherry" },
];

function SizeExample({ size }: { size: "sm" | "md" | "lg" }) {
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
      <Autocomplete.Input clearable placeholder={`Size ${size}`} size={size} />
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

export function Sizes() {
  return (
    <div class="flex flex-col gap-2">
      <SizeExample size="sm" />
      <SizeExample size="md" />
      <SizeExample size="lg" />
    </div>
  );
}
