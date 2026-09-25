<script lang="ts" setup>
import { createListCollection } from "@ark-ui/vue/collection";
import { Select } from "..";

const sizes = ["xs", "sm", "md", "lg"] as const;
const collection = createListCollection({
  items: [
    { label: "Next.js", value: "next" },
    { label: "Vite", value: "vite" },
    { label: "ESBuild", value: "esbuild" },
  ],
});
</script>

<template>
  <div class="flex flex-col gap-2">
    <Select.Root v-for="size in sizes" :key="size" :collection="collection">
      <Select.Trigger :size="size">
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
  </div>
</template>
