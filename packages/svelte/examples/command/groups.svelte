<script lang="ts">
import { useListCollection } from "@ark-ui/svelte/collection";
import { useFilter } from "@ark-ui/svelte/locale";
import { Command } from "@pisagor/svelte";

const initialItems = [
  { group: "Fruit", label: "Apple", value: "apple" },
  { group: "Fruit", label: "Banana", value: "banana" },
  { group: "Fruit", label: "Cherry", value: "cherry" },
  { group: "Countries", label: "United States", value: "us" },
  { group: "Countries", label: "United Kingdom", value: "uk" },
  { group: "Countries", label: "Germany", value: "de" },
];
const { contains } = useFilter({ sensitivity: "base" });
const { collection, filter } = useListCollection({
  filter: contains,
  groupBy: (item) => item.group,
  initialItems,
});
</script>

<Command
  {collection}
  onInputValueChange={({ inputValue }) => filter(inputValue)}
>
  <Command.Input placeholder="Search..." />
  <Command.Content>
    <Command.Empty />
    <Command.List>
      {#each collection.group() as [group, items], index}
        {#if index !== 0}
          <Command.Separator />
        {/if}
        <Command.ItemGroup heading={group}>
          {#each items as item}
            <Command.Item {item}>{item.label}</Command.Item>
          {/each}
        </Command.ItemGroup>
      {/each}
    </Command.List>
  </Command.Content>
</Command>
