<script lang="ts">
import { createListCollection } from "@ark-ui/svelte/collection";
import { Select } from "@pisagor/svelte";

const renderValue = (value: string[]) => {
  if (value.length === 0) {
    return "Select languages…";
  }

  const firstValue = value?.at(0) ?? "";
  const additionalValues =
    value.length > 1 ? ` (+${value.length - 1} more)` : "";

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
</script>

<Select.Root {collection} defaultValue={["javascript", "typescript"]} multiple>
  <Select.Trigger>
    <Select.ValueText class="capitalize">
      <Select.Context>{({ value }) => renderValue(value)}</Select.Context>
    </Select.ValueText>
  </Select.Trigger>
  <Select.Content>
    {#each collection.items as item}
      <Select.Item {item}>
        {item.label}
      </Select.Item>
    {/each}
  </Select.Content>
</Select.Root>
