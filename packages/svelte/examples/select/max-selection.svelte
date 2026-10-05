<script lang="ts">
import { createListCollection } from "@ark-ui/svelte/collection";
import { Select } from "@pisagor/svelte";

const MAX_SELECTION = 3;

const renderValue = (current: string[]) => {
  if (current.length === 0) {
    return "Select 3 frameworks";
  }
  const firstValue = current.at(0) ?? "";
  const additionalValues =
    current.length > 1 ? ` (+${current.length - 1} more)` : "";
  return firstValue + additionalValues;
};

const collection = createListCollection({
  items: [
    { label: "JavaScript", value: "javascript" },
    { label: "TypeScript", value: "typescript" },
    { label: "Python", value: "python" },
    { label: "Rust", value: "rust" },
  ],
});

let value = $state<string[]>([]);

const handleValueChange = (newValue: string | string[]) => {
  const values = Array.isArray(newValue) ? newValue : [newValue];
  value = values.slice(0, MAX_SELECTION);
};
</script>

<Select.Root {collection} multiple onValueChange={handleValueChange} {value}>
  <Select.Trigger>
    <Select.ValueText class="capitalize">
      <Select.Context>
        {#snippet render(
          select,
        )}
          {renderValue(select().value)}
        {/snippet}
      </Select.Context>
    </Select.ValueText>
  </Select.Trigger>
  <Select.Content>
    {#each collection.items as item}
      <Select.Item {item}>{item.label}</Select.Item>
    {/each}
  </Select.Content>
</Select.Root>
