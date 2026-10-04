/** @jsxImportSource solid-js */
import { useListCollection } from "@ark-ui/solid/collection";
import { useFilter } from "@ark-ui/solid/locale";
import { Autocomplete } from "@pisagor/solid/autocomplete";

export function Variants() {
  const initialItems = [
    { label: "Apple", value: "apple" },
    { label: "Banana", value: "banana" },
    { label: "Cherry", value: "cherry" },
  ];
  const { contains } = useFilter({ sensitivity: "base" });
  const { collection, filter } = useListCollection({
    filter: contains,
    initialItems,
  });

  return (
    <div class="flex flex-col gap-2">
      <Autocomplete.Root
        collection={collection}
        onInputValueChange={({ inputValue }) => filter(inputValue)}
      >
        <Autocomplete.Input placeholder="Primary" variant="primary" />
        <Autocomplete.Content>
          <Autocomplete.List>
            {collection.items.map((item) => (
              <Autocomplete.Item item={item}>{item.label}</Autocomplete.Item>
            ))}
          </Autocomplete.List>
        </Autocomplete.Content>
      </Autocomplete.Root>
      <Autocomplete.Root
        collection={collection}
        onInputValueChange={({ inputValue }) => filter(inputValue)}
      >
        <Autocomplete.Input placeholder="Secondary" variant="secondary" />
        <Autocomplete.Content>
          <Autocomplete.List>
            {collection.items.map((item) => (
              <Autocomplete.Item item={item}>{item.label}</Autocomplete.Item>
            ))}
          </Autocomplete.List>
        </Autocomplete.Content>
      </Autocomplete.Root>
    </div>
  );
}
