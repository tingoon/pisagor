<script lang="ts">
  import { Portal, useFilter, useListCollection } from "@ark-ui/svelte";
  import { Button, Input, Listbox, Popover } from "@pisagor/svelte";
  import { CaretUpDownIcon, CheckIcon } from "phosphor-svelte";

  let search = $state("");
  let isOpen = $state(false);
  const filters = useFilter({ sensitivity: "base" });
  const { collection, filter } = useListCollection({
    filter(itemString, filterText) {
      return filters().contains(itemString, filterText);
    },
    initialItems: [
      { label: "Brazil", value: "br" },
      { label: "Mexico", value: "mx" },
      { label: "Ireland", value: "ie" },
      { label: "Canada", value: "ca" },
    ],
  });

  const isEmpty = $derived(collection().items.length === 0 && search);

  function onSearchInput(e: Event & { currentTarget: HTMLInputElement }) {
    const next = e.currentTarget.value;
    search = next;
    filter(next);
  }
</script>

<Listbox.Root collection={collection()} onSelect={() => (isOpen = false)}>
  <Popover.Root onOpenChange={({ open }) => (isOpen = open)} open={isOpen}>
    <Popover.Trigger>
      {#snippet asChild(props)}
        <Button {...props()} class="justify-between" variant="outline">
          <Listbox.ValueText placeholder="Select framework" />
          <CaretUpDownIcon class="opacity-64" />
        </Button>
      {/snippet}
    </Popover.Trigger>
    <Portal>
      <Popover.Positioner>
        <Popover.Content class="min-w-64 gap-2 p-1">
          <Input
            oninput={onSearchInput}
            placeholder="Search..."
            value={search}
          />
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
        </Popover.Content>
      </Popover.Positioner>
    </Portal>
  </Popover.Root>
</Listbox.Root>
