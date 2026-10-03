<script lang="ts">
import { useListCollection } from "@ark-ui/svelte/collection";
import { useFilter } from "@ark-ui/svelte/locale";
import { Autocomplete } from "@pisagor/svelte/autocomplete";

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
const { contains } = useFilter({ sensitivity: "base" });
const { collection, filter } = useListCollection({
  filter: contains,
  groupBy: (item) => item.continent,
  initialItems,
});
</script>

<Autocomplete.Root
  {collection}
  onInputValueChange={({ inputValue }) => filter(inputValue)}
>
  <Autocomplete.Input placeholder="Select a timezone" />
  <Autocomplete.Content class="w-60">
    <Autocomplete.Empty />
    <Autocomplete.List>
      {#each collection.group() as [continent, group]}
        <Autocomplete.ItemGroup heading={continent}>
          {#each group as item}
            <Autocomplete.Item {item}>{item.label}</Autocomplete.Item>
          {/each}
        </Autocomplete.ItemGroup>
      {/each}
    </Autocomplete.List>
  </Autocomplete.Content>
</Autocomplete.Root>
