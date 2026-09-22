<script setup lang="ts">
import { Select } from "..";

const collection = createListCollection({
  items: [
    { label: "JavaScript", value: "javascript" },
    { label: "TypeScript", value: "typescript" },
    { label: "Python", value: "python" },
    { label: "Rust", value: "rust" },
  ],
});
</script>

<template>
        <Select.Root :collection="collection" :defaultValue="['javascript', 'typescript']" multiple>
          <Select.Trigger>
            <Select.ValueText class="capitalize">
              <Select.Context v-slot="{ value }">{{ renderValue(value) }}</Select.Context>
            </Select.ValueText>
          </Select.Trigger>
          <Select.Content>
            <Select.Item v-for="item in collection.items" :key="item.value" :item="item">
              {{ item.label }}
            </Select.Item>
          </Select.Content>
        </Select.Root>
  
</template>
