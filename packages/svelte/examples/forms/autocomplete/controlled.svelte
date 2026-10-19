<script lang="ts">
  import { Portal, useFilter, useListCollection } from "@ark-ui/svelte";
  import { CheckIcon } from "phosphor-svelte";
  import { Autocomplete, Combobox, InputGroup } from "@pisagor/svelte";

  const initialItems = [
    { label: "Apple", value: "apple" },
    { label: "Banana", value: "banana" },
    { label: "Cherry", value: "cherry" },
    { label: "Date", value: "date" },
  ];

  let value = $state<string | undefined>("banana");

  const filters = useFilter({ sensitivity: "base" });
  const { collection, filter } = useListCollection({
    filter(itemString, filterText) {
      return filters().contains(itemString, filterText);
    },
    initialItems,
  });
</script>

<div class="flex flex-col gap-2">
  <Autocomplete.Root
    class="w-full"
    {collection}
    onInputValueChange={({ inputValue }) => filter(inputValue)}
    onValueChange={(details) => (value = details.value[0])}
    value={value ? [value] : []}
  >
    <Autocomplete.Control>
      <InputGroup>
        <Autocomplete.Input>
          {#snippet asChild(props)}
            <InputGroup.Input {...props()} placeholder="Select a fruit..." />
          {/snippet}
        </Autocomplete.Input>
      </InputGroup>
    </Autocomplete.Control>
    <Portal>
      <Combobox.Positioner>
        <Autocomplete.Content>
          <Autocomplete.Empty>
            No results found. Try a different search.
          </Autocomplete.Empty>
          <Autocomplete.List>
            {#each collection().items as item (item.value)}
              <Autocomplete.Item {item} persistFocus>
                {item.label}
                <Combobox.ItemIndicator>
                  <CheckIcon />
                </Combobox.ItemIndicator>
              </Autocomplete.Item>
            {/each}
          </Autocomplete.List>
        </Autocomplete.Content>
      </Combobox.Positioner>
    </Portal>
  </Autocomplete.Root>
  <p class="text-muted-foreground text-center text-sm">
    Selected: {value ?? "(none)"}
  </p>
</div>
