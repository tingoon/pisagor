<script lang="ts">
import { createListCollection } from "@ark-ui/svelte/collection";
import { Select } from "@pisagor/svelte";

const collection = createListCollection({
  items: Array.from({ length: 20 }, (_, i) => ({
    label: `Framework ${i + 1}`,
    value: `framework-${i + 1}`,
  })),
});
</script>

<Select.Root {collection} positioning={{ fitViewport: true }}>
  <Select.Trigger>
    <Select.ValueText placeholder="Select framework" />
  </Select.Trigger>
  <Select.Content class="max-h-56">
    {#each collection.items as item}
      <Select.Item {item}>
        {item.label}
      </Select.Item>
    {/each}
  </Select.Content>
</Select.Root>
