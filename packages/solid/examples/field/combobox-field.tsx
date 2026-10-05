import { useListCollection } from "@ark-ui/solid/collection";
import { useFilter } from "@ark-ui/solid/locale";
import { Combobox, Field } from "@pisagor/solid";
import { For } from "solid-js";
export function ComboboxField() {
  const initialItems = [
    { label: "Apple", value: "apple" },
    { label: "Banana", value: "banana" },
    { label: "Orange", value: "orange" },
    { label: "Grape", value: "grape" },
    { label: "Strawberry", value: "strawberry" },
    { label: "Mango", value: "mango" },
    { label: "Pineapple", value: "pineapple" },
    { label: "Kiwi", value: "kiwi" },
    { label: "Peach", value: "peach" },
    { label: "Pear", value: "pear" },
  ];
  const filterFn = useFilter({ sensitivity: "base" });

  const { collection, filter } = useListCollection({
    filter: filterFn().contains,
    initialItems,
  });

  return (
    <Field>
      <Field.Label>Fruits</Field.Label>
      <Combobox.Root
        collection={collection()}
        onInputValueChange={({ inputValue }) => filter(inputValue)}
      >
        <Combobox.Input
          aria-label="Select an item"
          placeholder="Select an item..."
        />
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
      <Field.Description>Select an item.</Field.Description>
    </Field>
  );
}
