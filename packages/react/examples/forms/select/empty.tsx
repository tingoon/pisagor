import { Portal, createListCollection } from "@ark-ui/react";
import { CaretUpDownIcon } from "@phosphor-icons/react";
import { Select } from "@pisagor/react";

export function Empty() {
  const collection = createListCollection({
    items: [] as Array<{ label: string; value: string }>,
  });

  return (
    <Select.Root collection={collection}>
      <Select.Control>
        <Select.Trigger>
          <Select.ValueText placeholder="Select an option" />
          <Select.Indicator>
            <CaretUpDownIcon />
          </Select.Indicator>
        </Select.Trigger>
      </Select.Control>
      <Portal>
        <Select.Positioner>
          <Select.Content>
            <Select.Empty>
              No items to display. Add an item to get started.
            </Select.Empty>
          </Select.Content>
        </Select.Positioner>
      </Portal>
    </Select.Root>
  );
}
