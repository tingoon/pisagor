<script lang="ts">
import { createListCollection } from "@ark-ui/svelte/collection";
import { Item } from "@pisagor/svelte";
import { Listbox } from "@pisagor/svelte/listbox";

const collection = createListCollection({
  items: [
    { label: "Small", value: "sm" },
    { label: "Medium", value: "md" },
    { label: "Large", value: "lg" },
    { label: "Extra Large", value: "xl" },
  ],
});

let value = $state(["md"]);
const isLarge = $derived(value.includes("lg"));
</script>

<div class="flex flex-col gap-2">
  <p class="text-center text-muted-foreground text-sm">Selected the Large size</p>
  <Item.Group variant="outline">
    <Item class="p-1">
      <Listbox.Root
        {collection}
        onValueChange={(next) => (value = Array.isArray(next) ? next : [next])}
        {value}
      >
        <Listbox.Content>
          {#each collection.items as item}
            <Listbox.Item {item}>
              <Listbox.ItemText>{item.label}</Listbox.ItemText>
              <Listbox.ItemIndicator />
            </Listbox.Item>
          {/each}
        </Listbox.Content>
      </Listbox.Root>
    </Item>
  </Item.Group>
  <p class="text-center text-muted-foreground text-sm">{isLarge ? "✅" : "❌"}</p>
</div>
