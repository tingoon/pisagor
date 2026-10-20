<script lang="ts">
  import { createListCollection } from "@ark-ui/svelte";
  import { Item, Listbox } from "@pisagor/svelte";
  import { CheckIcon } from "phosphor-svelte";

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
  <p class="text-muted-foreground text-center text-sm">
    Selected the Large size
  </p>
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
              <Listbox.ItemIndicator>
                <CheckIcon />
              </Listbox.ItemIndicator>
            </Listbox.Item>
          {/each}
        </Listbox.Content>
      </Listbox.Root>
    </Item>
  </Item.Group>
  <p class="text-muted-foreground text-center text-sm">
    {isLarge ? "✅" : "❌"}
  </p>
</div>
