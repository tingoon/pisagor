import { Portal, createListCollection } from "@ark-ui/react";
import { CaretUpDownIcon, CheckIcon } from "@phosphor-icons/react";
import { Select } from "@pisagor/react";

export function WithScroll() {
  const collection = createListCollection({
    items: Array.from({ length: 20 }, (_, i) => ({
      label: `Framework ${i + 1}`,
      value: `framework-${i + 1}`,
    })),
  });

  return (
    <Select.Root collection={collection} positioning={{ fitViewport: true }}>
      <Select.Control>
        <Select.Trigger>
          <Select.ValueText placeholder="Select framework" />
          <Select.Indicator>
            <CaretUpDownIcon />
          </Select.Indicator>
        </Select.Trigger>
      </Select.Control>
      <Portal>
        <Select.Positioner>
          <Select.Content className="max-h-56">
            {collection.items.map((item) => (
              <Select.Item item={item} key={item.value}>
                {item.label}
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
