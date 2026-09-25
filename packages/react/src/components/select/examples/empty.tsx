import { createListCollection } from "@ark-ui/react";
import { Select } from "..";

export function Empty() {
  const collection = createListCollection({
    items: [] as Array<{ label: string; value: string }>,
  });
  return (
    <Select.Root collection={collection}>
      <Select.Trigger>
        <Select.ValueText placeholder="Select an option" />
      </Select.Trigger>
      <Select.Content>
        <Select.Empty>
          No items to display. Add an item to get started.
        </Select.Empty>
      </Select.Content>
    </Select.Root>
  );
}
