<script lang="ts">
import { createListCollection } from "@ark-ui/svelte/collection";
import { Item, Listbox } from "@pisagor/svelte";

const collection = createListCollection({
  items: [
    {
      description: "South America's country, Portuguese speaking.",
      label: "Brazil",
      value: "br",
    },
    {
      description: "North America's country, Spanish speaking.",
      label: "Mexico",
      value: "mx",
    },
    {
      description: "Europe's country, Irish/English speaking.",
      label: "Ireland",
      value: "ie",
    },
  ],
});
</script>

<Item.Group variant="outline">
  <Item class="p-1">
    <Listbox.Root {collection}>
      <Listbox.Content>
        {#each collection.items as item}
          <Listbox.Item {item}>
            <div class="flex min-w-0 flex-1 flex-col gap-0.5">
              <Listbox.ItemText>{item.label}</Listbox.ItemText>
              <span class="text-muted-foreground text-xs">
                {item.description}
              </span>
            </div>
            <Listbox.ItemIndicator />
          </Listbox.Item>
        {/each}
      </Listbox.Content>
    </Listbox.Root>
  </Item>
</Item.Group>
