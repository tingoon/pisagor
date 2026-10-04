<script lang="ts">
import { useListCollection } from "@ark-ui/svelte/collection";
import { useFilter } from "@ark-ui/svelte/locale";
import { Combobox } from "@pisagor/svelte";

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
  <Combobox.Root
    {collection}
    onInputValueChange={({ inputValue }) => filter(inputValue)}
    variant="primary"
  >
    <Combobox.Input placeholder="Primary" />
    <Combobox.Content>
      <Combobox.List>
        {#each collection.items as item}
          <Combobox.Item {item}>
            {item.label}
          </Combobox.Item>
        {/each}
      </Combobox.List>
    </Combobox.Content>
  </Combobox.Root>
  <Combobox.Root
    {collection}
    onInputValueChange={({ inputValue }) => filter(inputValue)}
    variant="secondary"
  >
    <Combobox.Input placeholder="Secondary" />
    <Combobox.Content>
      <Combobox.List>
        {#each collection.items as item}
          <Combobox.Item {item}>
            {item.label}
          </Combobox.Item>
        {/each}
      </Combobox.List>
    </Combobox.Content>
  </Combobox.Root>
</div>
