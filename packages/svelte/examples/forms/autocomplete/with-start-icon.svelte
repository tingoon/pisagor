<script lang="ts">
  import { Portal, useFilter, useListCollection } from "@ark-ui/svelte";
  import { AppleLogoIcon, CheckIcon } from "phosphor-svelte";
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
      <InputGroup.Addon align="inline-start">
        <AppleLogoIcon />
      </InputGroup.Addon>
      <Autocomplete.Input>
        {#snippet asChild(props)}
          <InputGroup.Input {...props()} placeholder="Search fruits..." />
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
