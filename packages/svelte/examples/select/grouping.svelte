<script lang="ts">
import { createListCollection } from "@ark-ui/svelte/collection";
import { Select } from "@pisagor/svelte/select";

const collection = createListCollection({
  groupBy: (item) => (item as { category: string }).category,
  items: [
    { category: "Frontend", label: "Next.js", value: "next" },
    { category: "Frontend", label: "Vite", value: "vite" },
    { category: "Frontend", label: "Astro", value: "astro" },
    { category: "Backend", label: "Express", value: "express" },
    { category: "Backend", label: "Fastify", value: "fastify" },
    { category: "Backend", label: "NestJS", value: "nestjs" },
  ],
});
</script>

<Select.Root {collection}>
  <Select.Trigger>
    <Select.ValueText placeholder="Select framework" />
  </Select.Trigger>
  <Select.Content>
    {#each collection.group() as [category, items]}
      <Select.ItemGroup heading={category}>
        {#each items as item}
          <Select.Item {item}>{item.label}</Select.Item>
        {/each}
      </Select.ItemGroup>
    {/each}
  </Select.Content>
</Select.Root>
