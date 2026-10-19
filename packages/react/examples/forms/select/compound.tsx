import { Portal, createListCollection } from "@ark-ui/react";
import { CaretUpDownIcon, CheckIcon } from "@phosphor-icons/react";
import { Select } from "@pisagor/react";

export function Compound() {
  const collection = createListCollection({
    items: ["Banana", "Apple", "Orange", "Pineapple"],
  });

  return (
    <Select.Root collection={collection}>
      <Select.Control>
        <Select.Trigger>
          <Select.ValueText placeholder="Select a fruit" />
          <Select.Indicator>
            <CaretUpDownIcon />
          </Select.Indicator>
        </Select.Trigger>
      </Select.Control>
      <Portal>
        <Select.Positioner>
          <Select.Content>
            {collection.items.map((item) => (
              <Select.Item item={item} key={item}>
                {item}
                <Select.ItemIndicator>
                  <CheckIcon />
                </Select.ItemIndicator>
              </Select.Item>
            ))}
          </Select.Content>
        </Select.Positioner>
      </Portal>
    </Select.Root>
  );
}
