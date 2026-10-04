<script lang="ts">
import { createListCollection } from "@ark-ui/svelte/collection";
import { Listbox } from "@pisagor/svelte";

const collection = createListCollection({
  items: [
    { label: "Brazil", value: "br" },
    { label: "Mexico", value: "mx" },
    { label: "Ireland", value: "ie" },
  ],
});
</script>

<Listbox.Root {collection} defaultValue={["br"]}>
  <Listbox.Content>
    {#each collection.items as item}
      <Listbox.Item {item}>
        <Listbox.ItemText>{item.label}</Listbox.ItemText>
        <Listbox.ItemIndicator />
      </Listbox.Item>
    {/each}
  </Listbox.Content>
</Listbox.Root>
