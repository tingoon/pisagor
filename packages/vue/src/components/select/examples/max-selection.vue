<script lang="ts" setup>
import { createListCollection } from "@ark-ui/vue/collection";
import { ref } from "vue";
import { Select } from "..";

const MAX_SELECTION = 3;

const value = ref<string[]>([]);
const collection = createListCollection({
  items: [
    { label: "JavaScript", value: "javascript" },
    { label: "TypeScript", value: "typescript" },
    { label: "Python", value: "python" },
    { label: "Rust", value: "rust" },
  ],
});

function renderValue(selected: string[]) {
  if (selected.length === 0) {
    return "Select 3 frameworks";
  }

  const firstValue = selected.at(0) ?? "";
  const additionalValues = selected.length > 1 ? ` (+${selected.length - 1} more)` : "";

  return firstValue + additionalValues;
}

function handleValueChange(next: string | string[]) {
  const values = Array.isArray(next) ? next : [next];
  value.value = values.slice(0, MAX_SELECTION);
}
</script>

<template>
  <Select.Root multiple :collection="collection" :value="value" @value-change="handleValueChange">
    <Select.Trigger>
      <Select.ValueText class="capitalize">
        <Select.Context v-slot="{ value: selected }">{{ renderValue(selected) }}</Select.Context>
      </Select.ValueText>
    </Select.Trigger>
    <Select.Content>
      <Select.Item v-for="item in collection.items" :key="item.value" :item="item">
        {{ item.label }}
      </Select.Item>
    </Select.Content>
  </Select.Root>
</template>
