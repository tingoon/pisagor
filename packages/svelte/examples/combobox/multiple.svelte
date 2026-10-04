<script lang="ts">
import { useListCollection } from "@ark-ui/svelte/collection";
import { useFilter } from "@ark-ui/svelte/locale";
import { Combobox } from "@pisagor/svelte";

const initialItems = [
    { label: "React", value: "react" },
    { label: "Vue", value: "vue" },
    { label: "Svelte", value: "svelte" },
    { label: "Solid", value: "solid" },
  ];
  const { contains } = useFilter({ sensitivity: "base" });

  const { collection, filter } = useListCollection({
    filter: contains,
    initialItems,
  });
</script>

<Combobox.Root
      collection={collection}
      multiple
      onInputValueChange={({ inputValue }) => filter(inputValue)}
    >
      <Combobox.Input placeholder="Select frameworks..." />
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
