<script lang="ts">
import { useListCollection } from "@ark-ui/svelte/collection";
import { useFilter } from "@ark-ui/svelte/locale";
import { Combobox } from "@pisagor/svelte";

const initialItems = [
  { label: "Apple", value: "apple" },
  { label: "Banana", value: "banana" },
  { label: "Cherry", value: "cherry" },
  { label: "Date", value: "date" },
];

let value = $state<string | undefined>("banana");

const { contains } = useFilter({ sensitivity: "base" });
const { collection, filter } = useListCollection({
  filter: contains,
  initialItems,
});
</script>

<div class="flex flex-col gap-2">
  <Combobox.Root
    {collection}
    inputValue={value ?? ""}
    onInputValueChange={({ inputValue }) => filter(inputValue)}
    onValueChange={(next) => {
      const arr = Array.isArray(next) ? next : [next];
      value = arr[0];
    }}
  >
    <Combobox.Input placeholder="Select a fruit..." />
    <Combobox.Content>
      <Combobox.List>
        {#each collection.items as item}
          <Combobox.Item {item}>{item.label}</Combobox.Item>
        {/each}
      </Combobox.List>
    </Combobox.Content>
  </Combobox.Root>
  <p class="text-center text-muted-foreground text-sm">
    Selected: {value ?? "(none)"}
  </p>
</div>
