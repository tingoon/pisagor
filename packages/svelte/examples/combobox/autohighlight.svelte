<script lang="ts">
import { useListCollection } from "@ark-ui/svelte/collection";
import { useFilter } from "@ark-ui/svelte/locale";
import { Combobox } from "@pisagor/svelte";

const initialItems = [
    { label: "Apple", value: "apple" },
    { label: "Banana", value: "banana" },
    { label: "Cherry", value: "cherry" },
    { label: "Date", value: "date" },
    { label: "Elderberry", value: "elderberry" },
  ];
  const { contains } = useFilter({ sensitivity: "base" });

  const { collection, filter } = useListCollection({
    filter: contains,
    initialItems,
  });
</script>

<Combobox.Root
      collection={collection}
      inputBehavior="autohighlight"
      onInputValueChange={({ inputValue }) => filter(inputValue)}
    >
      <Combobox.Input placeholder="Type to highlight..." />
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
