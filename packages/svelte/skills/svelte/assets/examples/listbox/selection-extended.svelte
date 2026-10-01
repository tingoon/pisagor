<script lang="ts">
import { createListCollection } from "@ark-ui/svelte/collection";
import { Item, Kbd } from "@pisagor/svelte";
import { Listbox } from "@pisagor/svelte/listbox";

const collection = createListCollection({
    items: [
      { label: "Brazil", value: "br" },
      { label: "Mexico", value: "mx" },
      { label: "Ireland", value: "ie" },
    ],
  });
</script>

<div class="flex flex-col gap-2">
      <p class="text-center text-muted-foreground text-sm">
        Hold <Kbd>⌘</Kbd> or <Kbd>Ctrl</Kbd> to select multiple
      </p>
      <Item.Group variant="outline">
        <Item class="w-full p-1">
          <Listbox.Root collection={collection} selectionMode="extended">
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
    </div>
