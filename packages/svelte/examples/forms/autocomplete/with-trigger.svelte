<script lang="ts">
  import { useFilter, useListCollection } from "@ark-ui/svelte";
  import { Portal } from "@ark-ui/svelte";
  import { CaretUpDownIcon, CheckIcon } from "phosphor-svelte";
  import { Autocomplete, Combobox, InputGroup } from "@pisagor/svelte";

  const initialItems = [
    { label: "Apple", value: "apple" },
    { label: "Banana", value: "banana" },
    { label: "Cherry", value: "cherry" },
  ];
  const filters = useFilter({ sensitivity: "base" });

  const { collection, filter } = useListCollection({
    filter(itemString, filterText) {
      return filters().contains(itemString, filterText);
    },
    initialItems,
  });
</script>

<Autocomplete.Root
  {collection}
  onInputValueChange={({ inputValue }) => filter(inputValue)}
>
  <Autocomplete.Control>
    <InputGroup>
      <Autocomplete.Input>
        {#snippet asChild(props)}
          <InputGroup.Input {...props()} placeholder="Select a fruit..." />
        {/snippet}
      </Autocomplete.Input>
      <InputGroup.Addon align="inline-end">
        <Autocomplete.Trigger>
          {#snippet asChild(props)}
            <InputGroup.Button
              {...props()}
              aria-label="Toggle suggestions"
              size="icon-xs"
              variant="ghost"
            >
              <CaretUpDownIcon aria-hidden="true" />
            </InputGroup.Button>
          {/snippet}
        </Autocomplete.Trigger>
      </InputGroup.Addon>
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
