<script lang="ts">
  import { useFilter, useListCollection } from "@ark-ui/svelte";
  import { Input, Item, Listbox } from "@pisagor/svelte";
  import { CheckIcon } from "phosphor-svelte";

  let search = $state("");
  const filters = useFilter({ sensitivity: "base" });
  const { collection, filter } = useListCollection({
    filter(itemString, filterText) {
      return filters().contains(itemString, filterText);
    },
    initialItems: [
      { label: "Brazil", value: "br" },
      { label: "Mexico", value: "mx" },
      { label: "Ireland", value: "ie" },
    ],
  });

  const isEmpty = $derived(collection().items.length === 0 && search);

  function onSearchInput(e: Event & { currentTarget: HTMLInputElement }) {
    const next = e.currentTarget.value;
    search = next;
    filter(next);
  }
</script>

<Item.Group variant="outline">
  <Item class="flex flex-col gap-2 p-1">
    <Input oninput={onSearchInput} placeholder="Search..." value={search} />
    <Listbox.Root collection={collection()}>
      <Listbox.Content>
        {#each collection().items as item}
          <Listbox.Item {item}>
            <Listbox.ItemText>{item.label}</Listbox.ItemText>
            <Listbox.ItemIndicator>
              <CheckIcon />
            </Listbox.ItemIndicator>
          </Listbox.Item>
        {/each}
        {#if isEmpty}
          <Listbox.Empty
            >No results found. Try a different search.</Listbox.Empty
          >
        {/if}
      </Listbox.Content>
    </Listbox.Root>
  </Item>
</Item.Group>
