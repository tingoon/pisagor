/** @jsxImportSource solid-js */
import { useListCollection } from "@ark-ui/solid/collection";
import { useFilter } from "@ark-ui/solid/locale";
import { Combobox } from "@pisagor/solid";

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
      <Combobox.Root
        collection={collection}
        onInputValueChange={({ inputValue }) => filter(inputValue)}
        variant="primary"
      >
        <Combobox.Input placeholder="Primary" />
        <Combobox.Content>
          <Combobox.List>
            {collection.items.map((item) => (
              <Combobox.Item item={item}>{item.label}</Combobox.Item>
            ))}
          </Combobox.List>
        </Combobox.Content>
      </Combobox.Root>
      <Combobox.Root
        collection={collection}
        onInputValueChange={({ inputValue }) => filter(inputValue)}
        variant="secondary"
      >
        <Combobox.Input placeholder="Secondary" />
        <Combobox.Content>
          <Combobox.List>
            {collection.items.map((item) => (
              <Combobox.Item item={item}>{item.label}</Combobox.Item>
            ))}
          </Combobox.List>
        </Combobox.Content>
      </Combobox.Root>
    </div>
  );
}
