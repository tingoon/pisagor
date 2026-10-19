<script lang="ts">
  import { Portal, useFilter, useListCollection } from "@ark-ui/svelte";
  import { CaretUpDownIcon, CheckIcon } from "phosphor-svelte";
  import { Combobox, InputGroup } from "@pisagor/svelte";

  const initialItems = [
    { label: "React", value: "react" },
    { label: "Vue", value: "vue" },
    { label: "Svelte", value: "svelte" },
    { label: "Solid", value: "solid" },
  ];
  const filters = useFilter({ sensitivity: "base" });

  const { collection, filter } = useListCollection({
    filter(itemString, filterText) {
      return filters().contains(itemString, filterText);
    },
    initialItems,
  });
</script>

<Combobox.Root
  {collection}
  multiple
  onInputValueChange={({ inputValue }) => filter(inputValue)}
>
  <Combobox.Control>
    <InputGroup>
      <Combobox.Input>
        {#snippet asChild(props)}
          <InputGroup.Input {...props()} placeholder="Select frameworks..." />
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
      <Combobox.Content>
        <Combobox.List>
          {#each collection().items as item (item.value)}
            <Combobox.Item {item} persistFocus>
              {item.label}
              <Combobox.ItemIndicator>
                <CheckIcon />
              </Combobox.ItemIndicator>
            </Combobox.Item>
          {/each}
        </Combobox.List>
      </Combobox.Content>
    </Combobox.Positioner>
  </Portal>
</Combobox.Root>
