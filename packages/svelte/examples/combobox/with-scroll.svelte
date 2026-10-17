<script module lang="ts">
  import source from "./with-scroll.svelte?raw";
  export { source };
</script>

<script lang="ts">
  import { useListCollection } from "@ark-ui/svelte/collection";
  import { useFilter } from "@ark-ui/svelte/locale";
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
