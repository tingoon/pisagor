<script lang="ts">
import { createListCollection } from "@ark-ui/svelte/collection";
import { Listbox } from "@pisagor/svelte";

const collection = createListCollection({
  items: [
    {
      alt: "Scenic mountain view",
      label: "Mountain Landscape",
      value: "mountain",
    },
    { alt: "Ocean waves", label: "Ocean Waves", value: "ocean" },
    { alt: "Forest path", label: "Forest Path", value: "forest" },
    { alt: "City skyline", label: "City Skyline", value: "city" },
    { alt: "Desert dunes", label: "Desert Dunes", value: "desert" },
  ],
});

let value = $state(["mountain"]);
const selectedImage = $derived(
  collection.items.find((item) => item.value === value.at(0)),
);
</script>

<div class="flex flex-col gap-2 sm:flex-row">
  <Listbox.Root
    class="w-full"
    {collection}
    onValueChange={(next) => (value = Array.isArray(next) ? next : [next])}
    {value}
  >
    <Listbox.Content class="overflow-auto max-sm:flex-row">
      {#each collection.items as item}
        <Listbox.Item {item}>
          <Listbox.ItemText>{item.label}</Listbox.ItemText>
        </Listbox.Item>
      {/each}
    </Listbox.Content>
  </Listbox.Root>
  <div class="flex w-full items-end rounded-xl border bg-muted p-4">
    <div class="mt-auto">
      <h3 class="font-medium text-sm">{selectedImage?.label}</h3>
      <p class="text-muted-foreground text-xs">{selectedImage?.alt}</p>
    </div>
  </div>
</div>
