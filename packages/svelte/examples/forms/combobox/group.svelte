<script lang="ts">
  import { Portal, useFilter, useListCollection } from "@ark-ui/svelte";
  import { CaretUpDownIcon, CheckIcon } from "phosphor-svelte";
  import { Combobox, InputGroup } from "@pisagor/svelte";

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

<Combobox.Root
  {collection}
  onInputValueChange={({ inputValue }) => filter(inputValue)}
>
  <Combobox.Control>
    <InputGroup>
      <Combobox.Input>
        {#snippet asChild(props)}
          <InputGroup.Input {...props()} placeholder="Select a timezone" />
        {/snippet}
      </Combobox.Input>
      <InputGroup.Addon align="inline-end">
        <Combobox.Trigger>
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
        </Combobox.Trigger>
      </InputGroup.Addon>
    </InputGroup>
  </Combobox.Control>
  <Portal>
    <Combobox.Positioner>
      <Combobox.Content class="w-60">
        <Combobox.List>
          {#each collection().group() as [continent, group] (continent)}
            <Combobox.ItemGroup>
              <Combobox.ItemGroupLabel>{continent}</Combobox.ItemGroupLabel>
              {#each group as item (item.value)}
                <Combobox.Item {item} persistFocus>
                  {item.label}
                  <Combobox.ItemIndicator>
                    <CheckIcon />
                  </Combobox.ItemIndicator>
                </Combobox.Item>
              {/each}
            </Combobox.ItemGroup>
          {/each}
        </Combobox.List>
      </Combobox.Content>
    </Combobox.Positioner>
  </Portal>
</Combobox.Root>
