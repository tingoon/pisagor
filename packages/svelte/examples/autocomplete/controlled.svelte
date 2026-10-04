<script lang="ts">
import { useListCollection } from "@ark-ui/svelte/collection";
import { useFilter } from "@ark-ui/svelte/locale";
import { Autocomplete } from "@pisagor/svelte/autocomplete";

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
  <Autocomplete.Root
    class="w-full"
    {collection}
    onInputValueChange={({ inputValue }) => filter(inputValue)}
    onValueChange={(next) => (value = next.at?.(0) ?? (Array.isArray(next) ? next[0] : next))}
    value={value ? [value] : []}
  >
    <Autocomplete.Input placeholder="Select a fruit..." />
    <Autocomplete.Content>
      <Autocomplete.Empty />
      <Autocomplete.List>
        {#each collection.items as item}
          <Autocomplete.Item {item}>{item.label}</Autocomplete.Item>
        {/each}
      </Autocomplete.List>
    </Autocomplete.Content>
  </Autocomplete.Root>
  <p class="text-center text-muted-foreground text-sm">
    Selected: {value ?? "(none)"}
  </p>
</div>
