import { Portal, useFilter, useListCollection } from "@ark-ui/react";
import {
  AppleLogoIcon,
  CaretUpDownIcon,
  CheckIcon,
} from "@phosphor-icons/react";
import { Combobox, InputGroup } from "@pisagor/react";

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
      <Combobox.Control>
        <InputGroup>
          <InputGroup.Addon align="inline-start">
            <AppleLogoIcon />
          </InputGroup.Addon>
          <Combobox.Input asChild>
            <InputGroup.Input placeholder="Search fruits..." />
          </Combobox.Input>
          <InputGroup.Addon align="inline-end">
            <InputGroup.Button asChild size="icon-xs" variant="ghost">
              <Combobox.Trigger>
                <CaretUpDownIcon aria-hidden />
              </Combobox.Trigger>
            </InputGroup.Button>
          </InputGroup.Addon>
        </InputGroup>
      </Combobox.Control>
      <Portal>
        <Combobox.Positioner>
          <Combobox.Content>
            <Combobox.List>
              {collection.items.map((item) => (
                <Combobox.Item item={item} key={item.value} persistFocus>
                  {item.label}
                  <Combobox.ItemIndicator>
                    <CheckIcon />
                  </Combobox.ItemIndicator>
                </Combobox.Item>
              ))}
            </Combobox.List>
          </Combobox.Content>
        </Combobox.Positioner>
      </Portal>
    </Combobox.Root>
  );
}
