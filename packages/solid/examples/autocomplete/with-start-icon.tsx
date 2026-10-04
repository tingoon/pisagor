/** @jsxImportSource solid-js */
import { useListCollection } from "@ark-ui/solid/collection";
import { useFilter } from "@ark-ui/solid/locale";
import { InputGroup } from "@pisagor/solid";
import { Autocomplete } from "@pisagor/solid/autocomplete";
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
    <Autocomplete.Root
      collection={collection}
      onInputValueChange={({ inputValue }) => filter(inputValue)}
    >
      <Autocomplete.Input placeholder="Search fruits...">
        <InputGroup.Addon align="inline-start">
          <AppleLogoIcon />
        </InputGroup.Addon>
      </Autocomplete.Input>
      <Autocomplete.Content>
        <Autocomplete.Empty />
        <Autocomplete.List>
          {collection.items.map((item) => (
            <Autocomplete.Item item={item}>{item.label}</Autocomplete.Item>
          ))}
        </Autocomplete.List>
      </Autocomplete.Content>
    </Autocomplete.Root>
  );
}
