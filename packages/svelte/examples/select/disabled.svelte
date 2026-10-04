<script lang="ts">
import { createListCollection } from "@ark-ui/svelte/collection";
import { Select } from "@pisagor/svelte/select";

const collection = createListCollection({
    items: [
      { label: "Next.js", value: "next" },
      { label: "Vite", value: "vite" },
      { label: "Astro", value: "astro" },
    ],
  });
</script>

<Select.Root collection={collection} disabled>
      <Select.Trigger>
        <Select.ValueText placeholder="Select framework" />
      </Select.Trigger>
      <Select.Content>
        {#each collection.items as item}
<Select.Item item={item}>
            {item.label}
          </Select.Item>
{/each}
      </Select.Content>
    </Select.Root>
