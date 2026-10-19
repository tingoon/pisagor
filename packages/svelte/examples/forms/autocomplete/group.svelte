<script lang="ts">
  import { Portal, useFilter, useListCollection } from "@ark-ui/svelte";
  import { CheckIcon } from "phosphor-svelte";
  import { Autocomplete, Combobox, InputGroup } from "@pisagor/svelte";

  const initialItems = [
    { continent: "North America", label: "Canada", value: "ca" },
    { continent: "North America", label: "United States", value: "us" },
    { continent: "North America", label: "Mexico", value: "mx" },
    { continent: "Europe", label: "United Kingdom", value: "uk" },
    { continent: "Europe", label: "Germany", value: "de" },
    { continent: "Europe", label: "France", value: "fr" },
    { continent: "Asia", label: "Japan", value: "jp" },
    { continent: "Asia", label: "South Korea", value: "kr" },
    { continent: "Asia", label: "China", value: "cn" },
  ];
  const filters = useFilter({ sensitivity: "base" });
  const { collection, filter } = useListCollection({
    filter(itemString, filterText) {
      return filters().contains(itemString, filterText);
    },
    groupBy: (item) => item.continent,
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
          <InputGroup.Input {...props()} placeholder="Select a timezone" />
        {/snippet}
      </Autocomplete.Input>
    </InputGroup>
  </Autocomplete.Control>
  <Portal>
    <Combobox.Positioner>
      <Autocomplete.Content class="w-60">
        <Autocomplete.Empty>
          No results found. Try a different search.
        </Autocomplete.Empty>
        <Autocomplete.List>
          {#each collection().group() as [continent, group] (continent)}
            <Autocomplete.ItemGroup>
              <Autocomplete.ItemGroupLabel
                >{continent}</Autocomplete.ItemGroupLabel
              >
              {#each group as item (item.value)}
                <Autocomplete.Item {item} persistFocus>
                  {item.label}
                  <Combobox.ItemIndicator>
                    <CheckIcon />
                  </Combobox.ItemIndicator>
                </Autocomplete.Item>
              {/each}
            </Autocomplete.ItemGroup>
          {/each}
        </Autocomplete.List>
      </Autocomplete.Content>
    </Combobox.Positioner>
  </Portal>
</Autocomplete.Root>
