<script lang="ts">
import { createListCollection } from "@ark-ui/svelte/collection";
import { Item } from "@pisagor/svelte";
import { Listbox } from "@pisagor/svelte/listbox";

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
        <Listbox.Root collection={collection}>
          <Listbox.Content>
            {#each collection.items as item}
<Listbox.Item item={item}>
                {item.icon}
                <Listbox.ItemText>{item.label}</Listbox.ItemText>
                <Listbox.ItemIndicator />
              </Listbox.Item>
{/each}
          </Listbox.Content>
        </Listbox.Root>
      </Item>
    </Item.Group>
