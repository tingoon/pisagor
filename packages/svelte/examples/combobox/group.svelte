<script lang="ts">
import { useListCollection } from "@ark-ui/svelte/collection";
import { useFilter } from "@ark-ui/svelte/locale";
import { Combobox } from "@pisagor/svelte";

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
  <Combobox.Input placeholder="Select a timezone" />
  <Combobox.Content class="w-60">
    <Combobox.List>
      {#each collection().group() as [continent, group]}
        <Combobox.ItemGroup heading={continent}>
          {#each group as item}
            <Combobox.Item {item}>{item.label}</Combobox.Item>
          {/each}
        </Combobox.ItemGroup>
      {/each}
    </Combobox.List>
  </Combobox.Content>
</Combobox.Root>
