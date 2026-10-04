<script lang="ts">
import { createListCollection } from "@ark-ui/svelte/collection";
import { Select } from "@pisagor/svelte";

const collection = createListCollection({
  items: ["Apple", "Banana", "Orange"],
});
</script>

<div class="flex flex-col gap-2">
  <Select.Root {collection} variant="primary">
    <Select.Trigger>
      <Select.ValueText placeholder="Primary" />
    </Select.Trigger>
    <Select.Content>
      {#each collection.items as item}
        <Select.Item {item}>
          {item}
        </Select.Item>
      {/each}
    </Select.Content>
  </Select.Root>
  <Select.Root {collection} variant="secondary">
    <Select.Trigger>
      <Select.ValueText placeholder="Secondary" />
    </Select.Trigger>
    <Select.Content>
      {#each collection.items as item}
        <Select.Item {item}>
          {item}
        </Select.Item>
      {/each}
    </Select.Content>
  </Select.Root>
</div>
