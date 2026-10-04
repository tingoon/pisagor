<script lang="ts">
import { useListCollection } from "@ark-ui/svelte/collection";
import { useFilter } from "@ark-ui/svelte/locale";
import { Autocomplete } from "@pisagor/svelte/autocomplete";

const initialItems = [
    { label: "Apple", value: "apple" },
    { label: "Banana", value: "banana" },
    { label: "Cherry", value: "cherry" },
  ];
  const { contains } = useFilter({ sensitivity: "base" });

  const { collection, filter } = useListCollection({
    filter: contains,
    initialItems,
  });
</script>

<Autocomplete.Root
      collection={collection}
      defaultValue={["apple"]}
      onInputValueChange={({ inputValue }) => filter(inputValue)}
    >
      <Autocomplete.Input clearable placeholder="Select a fruit..." />
      <Autocomplete.Content>
        <Autocomplete.Empty>No items found.</Autocomplete.Empty>
        <Autocomplete.List>
          {#each collection.items as item}
<Autocomplete.Item item={item}>
              {item.label}
            </Autocomplete.Item>
{/each}
        </Autocomplete.List>
      </Autocomplete.Content>
    </Autocomplete.Root>
