<script lang="ts" setup>
import { Select } from "..";

const collection = createListCollection({
  items: [
    { label: "Next.js", value: "next" },
    { label: "Vite", value: "vite" },
    { label: "Astro", value: "astro" },
  ],
});
</script>

<template>
  <Select.Root disabled :collection="collection">
    <Select.Trigger>
      <Select.ValueText placeholder="Select framework" />
    </Select.Trigger>
    <Select.Content>
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
