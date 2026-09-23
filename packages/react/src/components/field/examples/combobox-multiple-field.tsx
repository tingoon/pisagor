import { useFilter, useListCollection } from "@ark-ui/react";
import { Combobox } from "@pisagor/react";
import { Field } from "..";
export function ComboboxMultipleField() {
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
  const { contains } = useFilter({ sensitivity: "base" });

  const { collection, filter } = useListCollection({
    filter: contains,
    initialItems,
  });

  return (
    <Field>
      <Field.Label>Fruits</Field.Label>
      <Combobox.Root
        collection={collection}
        multiple
        onInputValueChange={({ inputValue }) => filter(inputValue)}
      >
        <Combobox.Input aria-label="Select items" placeholder="Select items…" />
        <Combobox.Content>
          <Combobox.List>
            {collection.items.map((item) => (
              <Combobox.Item item={item} key={item.value}>
                {item.label}
              </Combobox.Item>
            ))}
          </Combobox.List>
        </Combobox.Content>
      </Combobox.Root>
      <Field.Description>Select multiple items.</Field.Description>
    </Field>
  );
}
