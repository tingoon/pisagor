<script lang="ts">
import { createListCollection } from "@ark-ui/svelte/collection";
import { Item, Listbox } from "@pisagor/svelte";

const collection = createListCollection({
    items: [
      { label: "Brazil", value: "br" },
      { label: "Mexico", value: "mx" },
      { label: "Ireland", value: "ie" },
    ],
  });
</script>

<Item.Group variant="outline">
      <Item class="p-1">
        <Listbox.Root collection={collection} selectionMode="multiple">
          <Listbox.Content>
            {#each collection.items as item}
<Listbox.Item item={item}>
                <Listbox.ItemText>{item.label}</Listbox.ItemText>
                <Listbox.ItemIndicator />
              </Listbox.Item>
{/each}
          </Listbox.Content>
        </Listbox.Root>
      </Item>
    </Item.Group>
