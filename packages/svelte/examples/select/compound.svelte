<script lang="ts">
import { createListCollection } from "@ark-ui/svelte/collection";
import { Select } from "@pisagor/svelte/select";

const collection = createListCollection({
    items: ["Banana", "Apple", "Orange", "Pineapple"],
  });
</script>

<Select.Root collection={collection}>
      <Select.Trigger>
        <Select.ValueText placeholder="Select a fruit" />
      </Select.Trigger>
      <Select.Content>
        <Select.ItemGroup heading="Fruits">
          {#each collection.items as item}
<Select.Item item={item}>
              {item}
            </Select.Item>
{/each}
        </Select.ItemGroup>
      </Select.Content>
    </Select.Root>
