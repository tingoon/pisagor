<script lang="ts">
import { createListCollection } from "@ark-ui/svelte/collection";
import { Select } from "@pisagor/svelte";

const collection = createListCollection({
  items: [
    { label: "React", value: "react" },
    { label: "Vue", value: "vue" },
    { label: "Svelte", value: "svelte" },
  ],
});

let value = $state<string[]>(["react"]);
</script>

<Select.Root
  {collection}
  onValueChange={(next) => {
    value = Array.isArray(next) ? next : [next];
  }}
  {value}
>
  <Select.Trigger>
    <Select.ValueText placeholder="Select a framework" />
  </Select.Trigger>
  <Select.Content>
    {#each collection.items as item}
      <Select.Item {item}>{item.label}</Select.Item>
    {/each}
  </Select.Content>
</Select.Root>
