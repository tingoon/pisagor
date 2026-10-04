<script lang="ts">
import { createListCollection } from "@ark-ui/svelte/collection";
import { Item, Listbox } from "@pisagor/svelte";

const collection = createListCollection({
  items: [
    { label: "Free", value: "free" },
    { label: "Pro", value: "pro" },
    {
      disabled: true,
      label: "Enterprise",
      value: "enterprise",
    },
    { label: "Custom", value: "custom" },
  ],
});
</script>

<Item.Group variant="outline">
  <Item class="p-1">
    <Listbox.Root {collection}>
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
