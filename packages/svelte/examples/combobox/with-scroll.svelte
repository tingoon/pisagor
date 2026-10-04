<script lang="ts">
import { useListCollection } from "@ark-ui/svelte/collection";
import { useFilter } from "@ark-ui/svelte/locale";
import { Combobox } from "@pisagor/svelte";

const initialItems = Array.from({ length: 30 }, (_, i) => ({
    label: `Option ${i + 1}`,
    value: `option-${i + 1}`,
  }));
  const { contains } = useFilter({ sensitivity: "base" });

  const { collection, filter } = useListCollection({
    filter: contains,
    initialItems,
  });
</script>

<Combobox.Root
      collection={collection}
      onInputValueChange={({ inputValue }) => filter(inputValue)}
    >
      <Combobox.Input placeholder="Search..." />
      <Combobox.Content class="max-h-60">
        <Combobox.List>
          {#each collection.items as item}
<Combobox.Item item={item}>
              {item.label}
            </Combobox.Item>
{/each}
        </Combobox.List>
      </Combobox.Content>
    </Combobox.Root>
