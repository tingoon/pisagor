<script lang="ts">
import { useListCollection } from "@ark-ui/svelte/collection";
import { useFilter } from "@ark-ui/svelte/locale";
import { Combobox, Field } from "@pisagor/svelte";

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
      <Combobox.Root
        collection={collection}
        multiple
        onInputValueChange={({ inputValue }) => filter(inputValue)}
      >
        <Combobox.Input aria-label="Select items" placeholder="Select items…" />
        <Combobox.Content>
          <Combobox.List>
            {#each collection.items as item}
<Combobox.Item item={item}>
                {item.label}
              </Combobox.Item>
{/each}
          </Combobox.List>
        </Combobox.Content>
      </Combobox.Root>
      <Field.Description>Select multiple items.</Field.Description>
    </Field>
