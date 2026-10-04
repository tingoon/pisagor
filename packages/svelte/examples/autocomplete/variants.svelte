<script lang="ts">
import { useListCollection } from "@ark-ui/svelte/collection";
import { useFilter } from "@ark-ui/svelte/locale";
import { Autocomplete } from "@pisagor/svelte";

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

<div class="flex flex-col gap-2">
      <Autocomplete.Root
        collection={collection}
        onInputValueChange={({ inputValue }) => filter(inputValue)}
      >
        <Autocomplete.Input placeholder="Primary" variant="primary" />
        <Autocomplete.Content>
          <Autocomplete.List>
            {#each collection.items as item}
<Autocomplete.Item item={item}>
                {item.label}
              </Autocomplete.Item>
{/each}
          </Autocomplete.List>
        </Autocomplete.Content>
      </Autocomplete.Root>
      <Autocomplete.Root
        collection={collection}
        onInputValueChange={({ inputValue }) => filter(inputValue)}
      >
        <Autocomplete.Input placeholder="Secondary" variant="secondary" />
        <Autocomplete.Content>
          <Autocomplete.List>
            {#each collection.items as item}
<Autocomplete.Item item={item}>
                {item.label}
              </Autocomplete.Item>
{/each}
          </Autocomplete.List>
        </Autocomplete.Content>
      </Autocomplete.Root>
    </div>
