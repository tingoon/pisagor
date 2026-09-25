<script lang="ts" setup>
import { createListCollection } from "@ark-ui/vue/collection";

import { Select } from "..";

const collection = createListCollection({
  items: Array.from({ length: 20 }, (_, i) => ({
    label: `Framework ${i + 1}`,
    value: `framework-${i + 1}`,
  })),
});
const positioning = { fitViewport: true };
</script>

<template>
  <Select.Root :collection="collection" :positioning="positioning">
    <Select.Trigger>
      <Select.ValueText placeholder="Select framework" />
    </Select.Trigger>
    <Select.Content class="max-h-56">
      <Select.Item
        v-for="item in collection.items"
        :key="item.value"
        :item="item"
      >
        {{ item.label }}
      </Select.Item>
    </Select.Content>
  </Select.Root>
</template>
