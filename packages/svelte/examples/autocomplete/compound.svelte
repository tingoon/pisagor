<script lang="ts">
import { useListCollection } from "@ark-ui/svelte/collection";
import { useFilter } from "@ark-ui/svelte/locale";
import { Autocomplete } from "@pisagor/svelte";

const initialItems = [
  { label: "Apple", value: "apple" },
  { label: "Banana", value: "banana" },
  { label: "Cherry", value: "cherry" },
  { label: "Date", value: "date" },
];
const { contains } = useFilter({ sensitivity: "base" });

const { collection, filter } = useListCollection({
  filter: contains,
  initialItems,
});
</script>

<Autocomplete.Root
  {collection}
  onInputValueChange={({ inputValue }) => filter(inputValue)}
>
  <Autocomplete.Input clearable placeholder="for example, Apple" />
  <Autocomplete.Content>
    <Autocomplete.Empty />
    <Autocomplete.List>
      {#each collection.items as item}
        <Autocomplete.Item {item}>
          {item.label}
        </Autocomplete.Item>
      {/each}
    </Autocomplete.List>
  </Autocomplete.Content>
</Autocomplete.Root>
