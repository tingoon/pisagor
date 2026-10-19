<script lang="ts">
  import { Portal, useFilter, useListCollection } from "@ark-ui/svelte";
  import { CaretUpDownIcon, CheckIcon } from "phosphor-svelte";
  import { Combobox, Field, InputGroup } from "@pisagor/svelte";

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
  <Combobox.Root
    {collection}
    multiple
    onInputValueChange={({ inputValue }) => filter(inputValue)}
  >
    <Combobox.Control>
      <InputGroup>
        <Combobox.Input>
          {#snippet asChild(props)}
            <InputGroup.Input
              {...props()}
              aria-label="Select items"
              placeholder="Select items…"
            />
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
  <Field.Description>Select multiple items.</Field.Description>
</Field>
