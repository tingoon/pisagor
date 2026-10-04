<script lang="ts">
import { createListCollection } from "@ark-ui/svelte/collection";
import { Item, Listbox } from "@pisagor/svelte";

const collection = createListCollection({
  items: [
    { icon: "🇧🇷", label: "Brazil", value: "brazil" },
    { icon: "🇲🇽", label: "Mexico", value: "mexico" },
    { icon: "🇮🇪", label: "Ireland", value: "ireland" },
  ],
});
</script>

<Item.Group variant="outline">
  <Item class="p-1">
    <Listbox.Root {collection}>
      <Listbox.Content>
        {#each collection.items as item}
          <Listbox.Item {item}>
            {item.icon}
            <Listbox.ItemText>{item.label}</Listbox.ItemText>
            <Listbox.ItemIndicator />
          </Listbox.Item>
        {/each}
      </Listbox.Content>
    </Listbox.Root>
  </Item>
</Item.Group>
