<script lang="ts">
import { createListCollection } from "@ark-ui/svelte/collection";
import { Select } from "@pisagor/svelte";

const collection = createListCollection({
    items: [] as Array<{ label: string; value: string }>,
  });
</script>

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
