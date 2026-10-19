<script lang="ts">
  import { Portal, useFilter, useListCollection } from "@ark-ui/svelte";
  import { CaretUpDownIcon, CheckIcon } from "phosphor-svelte";
  import { Combobox, InputGroup } from "@pisagor/svelte";

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

  function onValueChange(details: { value: string[] }) {
    value = details.value[0];
  }
</script>

<div class="flex flex-col gap-2">
  <Combobox.Root
    {collection}
    inputValue={value ?? ""}
    onInputValueChange={({ inputValue }) => filter(inputValue)}
    {onValueChange}
  >
    <Combobox.Control>
      <InputGroup>
        <Combobox.Input>
          {#snippet asChild(props)}
            <InputGroup.Input {...props()} placeholder="Select a fruit..." />
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
  <p class="text-muted-foreground text-center text-sm">
    Selected: {value ?? "(none)"}
  </p>
</div>
