<script lang="ts">
import { useListCollection } from "@ark-ui/svelte/collection";
import { useFilter } from "@ark-ui/svelte/locale";
import { Autocomplete } from "@pisagor/svelte";

const initialItems = [
  { label: "Apple", value: "apple" },
  { label: "Banana", value: "banana" },
  { label: "Cherry", value: "cherry" },
];
const filters = useFilter({ sensitivity: "base" });

const { collection, filter } = useListCollection({
  filter(itemString, filterText) {
    return filters().contains(itemString, filterText);
  },
  initialItems,
});
</script>

<Autocomplete.Root
  {collection}
  defaultValue={["apple"]}
  onInputValueChange={({ inputValue }) => filter(inputValue)}
>
  <Autocomplete.Input clearable placeholder="Select a fruit..." />
  <Autocomplete.Content>
    <Autocomplete.Empty>No items found.</Autocomplete.Empty>
    <Autocomplete.List>
      {#each collection().items as item}
        <Autocomplete.Item {item}>
          {item.label}
        </Autocomplete.Item>
      {/each}
    </Autocomplete.List>
  </Autocomplete.Content>
</Autocomplete.Root>
