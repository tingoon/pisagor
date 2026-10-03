/** @jsxImportSource solid-js */
import { useListCollection } from "@ark-ui/solid/collection";
import { useFilter } from "@ark-ui/solid/locale";
import { InputGroup } from "@pisagor/solid";
import { Combobox } from "@pisagor/solid/combobox";
import { AppleLogoIcon } from "@pisagor/solid/icons";
export function WithStartIcon() {
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
    <Combobox.Root
      collection={collection}
      onInputValueChange={({ inputValue }) => filter(inputValue)}
    >
      <Combobox.Input placeholder="Search fruits...">
        <InputGroup.Addon align="inline-start">
          <AppleLogoIcon />
        </InputGroup.Addon>
      </Combobox.Input>
      <Combobox.Content>
        <Combobox.List>
          {collection.items.map((item) => (
            <Combobox.Item item={item}>{item.label}</Combobox.Item>
          ))}
        </Combobox.List>
      </Combobox.Content>
    </Combobox.Root>
  );
}
