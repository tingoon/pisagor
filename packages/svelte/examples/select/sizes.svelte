<script lang="ts">
import { createListCollection } from "@ark-ui/svelte/collection";
import { Select } from "@pisagor/svelte";

const collection = createListCollection({
  items: [
    { label: "Next.js", value: "next" },
    { label: "Vite", value: "vite" },
    { label: "ESBuild", value: "esbuild" },
  ],
});

const sizes = ["sm", "md", "lg"] as const;
</script>

<div class="flex flex-col gap-2">
  {#each sizes as size}
    <Select.Root {collection}>
      <Select.Trigger {size}>
        <Select.ValueText placeholder="Select framework" />
      </Select.Trigger>
      <Select.Content>
        {#each collection.items as item}
          <Select.Item {item}>{item.label}</Select.Item>
        {/each}
      </Select.Content>
    </Select.Root>
  {/each}
</div>
