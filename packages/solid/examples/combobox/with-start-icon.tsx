import { useListCollection } from "@ark-ui/solid/collection";
import { useFilter } from "@ark-ui/solid/locale";
import { Combobox, InputGroup } from "@pisagor/solid";
import { AppleLogoIcon } from "@pisagor/solid/icons";
import { For } from "solid-js";
export function WithStartIcon() {
  const initialItems = [
    { label: "Apple", value: "apple" },
    { label: "Banana", value: "banana" },
    { label: "Cherry", value: "cherry" },
  ];
  const filterFn = useFilter({ sensitivity: "base" });

  const { collection, filter } = useListCollection({
    filter: filterFn().contains,
    initialItems,
  });

  return (
    <Combobox.Root
      collection={collection()}
      onInputValueChange={({ inputValue }) => filter(inputValue)}
    >
      <Combobox.Input placeholder="Search fruits...">
        <InputGroup.Addon align="inline-start">
          <AppleLogoIcon />
        </InputGroup.Addon>
      </Combobox.Input>
      <Combobox.Content>
        <Combobox.List>
          <For each={collection().items}>
            {(item) => <Combobox.Item item={item}>{item.label}</Combobox.Item>}
          </For>
        </Combobox.List>
      </Combobox.Content>
    </Combobox.Root>
  );
}
