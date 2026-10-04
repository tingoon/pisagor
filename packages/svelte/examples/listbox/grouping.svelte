<script lang="ts">
import { createListCollection } from "@ark-ui/svelte/collection";
import { Item, Listbox } from "@pisagor/svelte";

const collection = createListCollection({
  groupBy: (item) => (item as { region: string }).region,
  items: [
    { label: "Brazil", region: "South America", value: "br" },
    { label: "Colombia", region: "South America", value: "co" },
    { label: "Mexico", region: "North America", value: "mx" },
    { label: "Canada", region: "North America", value: "ca" },
  ],
});
</script>

<Item.Group variant="outline">
  <Item class="p-1">
    <Listbox.Root {collection}>
      <Listbox.Content>
        {#each collection.group() as [region, items]}
          <Listbox.ItemGroup>
            <Listbox.ItemGroupLabel>{region}</Listbox.ItemGroupLabel>
            {#each items as item}
              <Listbox.Item {item}>
                <Listbox.ItemText>{item.label}</Listbox.ItemText>
                <Listbox.ItemIndicator />
              </Listbox.Item>
            {/each}
          </Listbox.ItemGroup>
        {/each}
      </Listbox.Content>
    </Listbox.Root>
  </Item>
</Item.Group>
