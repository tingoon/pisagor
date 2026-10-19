import { Portal, useFilter, useListCollection } from "@ark-ui/react";
import { CaretUpDownIcon, CheckIcon } from "@phosphor-icons/react";
import { Combobox, InputGroup } from "@pisagor/react";

export function WithScroll() {
  const initialItems = Array.from({ length: 30 }, (_, i) => ({
    label: `Option ${i + 1}`,
    value: `option-${i + 1}`,
  }));
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
          <Combobox.Input asChild>
            <InputGroup.Input placeholder="Search..." />
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
          <Combobox.Content className="max-h-60">
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
