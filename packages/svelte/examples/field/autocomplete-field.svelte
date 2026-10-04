<script lang="ts">
import { useListCollection } from "@ark-ui/svelte/collection";
import { useFilter } from "@ark-ui/svelte/locale";
import { Autocomplete, Combobox, Field } from "@pisagor/svelte";

const initialItems = [
    { label: "Apple", value: "apple" },
    { label: "Banana", value: "banana" },
    { label: "Orange", value: "orange" },
    { label: "Grape", value: "grape" },
    { label: "Strawberry", value: "strawberry" },
    { label: "Mango", value: "mango" },
    { label: "Pineapple", value: "pineapple" },
    { label: "Kiwi", value: "kiwi" },
    { label: "Peach", value: "peach" },
    { label: "Pear", value: "pear" },
  ];
  const { contains } = useFilter({ sensitivity: "base" });

  const { collection, filter } = useListCollection({
    filter: contains,
    initialItems,
  });
</script>

<Field>
      <Field.Label>Fruits</Field.Label>
      <Autocomplete.Root
        collection={collection}
        onInputValueChange={({ inputValue }) => filter(inputValue)}
      >
        <Autocomplete.Input
          aria-label="Search items"
          placeholder="Search items…"
        />
        <Autocomplete.Content>
          <Autocomplete.Empty>No items found.</Autocomplete.Empty>
          <Combobox.List>
            {#each collection.items as item}
<Autocomplete.Item item={item}>
                {item.label}
              </Autocomplete.Item>
{/each}
          </Combobox.List>
        </Autocomplete.Content>
      </Autocomplete.Root>
      <Field.Description>Select an item.</Field.Description>
    </Field>
