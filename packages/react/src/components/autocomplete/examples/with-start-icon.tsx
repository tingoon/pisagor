import { useFilter, useListCollection } from "@ark-ui/react";
import { AppleLogoIcon } from "@phosphor-icons/react";
import { InputGroup } from "@pisagor/react";
import { Autocomplete } from "..";
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
            <Autocomplete.Item item={item} key={item.value}>
              {item.label}
            </Autocomplete.Item>
          ))}
        </Autocomplete.List>
      </Autocomplete.Content>
    </Autocomplete.Root>
  );
}
