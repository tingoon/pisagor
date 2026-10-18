<script lang="ts">
  import { useFilter, useListCollection } from "@ark-ui/svelte";
  import { Combobox } from "@pisagor/svelte";

  const initialItems = Array.from({ length: 30 }, (_, i) => ({
    label: `Option ${i + 1}`,
    value: `option-${i + 1}`,
  }));
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
  onInputValueChange={({ inputValue }) => filter(inputValue)}
>
  <Combobox.Input placeholder="Search..." />
  <Combobox.Content class="max-h-60">
    <Combobox.List>
      {#each collection().items as item}
        <Combobox.Item {item}>
          {item.label}
        </Combobox.Item>
      {/each}
    </Combobox.List>
  </Combobox.Content>
</Combobox.Root>
