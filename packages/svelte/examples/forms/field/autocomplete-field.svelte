<script lang="ts">
  import { Portal, useFilter, useListCollection } from "@ark-ui/svelte";
  import { CheckIcon } from "phosphor-svelte";
  import { Autocomplete, Combobox, Field, InputGroup } from "@pisagor/svelte";

  const initialItems = [
    { label: "Apple", value: "apple" },
    { label: "Banana", value: "banana" },
    { label: "Orange", value: "orange" },
    { label: "Grape", value: "grape" },
    { label: "Strawberry", value: "strawberry" },
    { label: "Mango", value: "mango" },
    { label: "Pineapple", value: "pineapple" },
    { label: "Kiwi", value: "kiwi" },
    { label: "Peach", value: "peach" },
    { label: "Pear", value: "pear" },
  ];
  const filters = useFilter({ sensitivity: "base" });

  const { collection, filter } = useListCollection({
    filter(itemString, filterText) {
      return filters().contains(itemString, filterText);
    },
    initialItems,
  });
</script>

<Field>
  <Field.Label>Fruits</Field.Label>
  <Autocomplete.Root
    {collection}
    onInputValueChange={({ inputValue }) => filter(inputValue)}
  >
    <Autocomplete.Control>
      <InputGroup>
        <Autocomplete.Input>
          {#snippet asChild(props)}
            <InputGroup.Input
              {...props()}
              aria-label="Search items"
              placeholder="Search items…"
            />
          {/snippet}
        </Autocomplete.Input>
      </InputGroup>
    </Autocomplete.Control>
    <Portal>
      <Combobox.Positioner>
        <Autocomplete.Content>
          <Autocomplete.Empty>No items found.</Autocomplete.Empty>
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
  <Field.Description>Select an item.</Field.Description>
</Field>
