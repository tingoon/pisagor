<script lang="ts" setup>
import { Select } from "..";

const collection = createListCollection({
  items: ["Apple", "Banana", "Orange"],
});
</script>

<template>
  <div class="flex flex-col gap-2">
    <Select.Root variant="primary" :collection="collection">
      <Select.Trigger>
        <Select.ValueText placeholder="Primary" />
      </Select.Trigger>
      <Select.Content>
        <Select.Item v-for="item in collection.items" :key="item" :item="item">
          {{ item }}
        </Select.Item>
      </Select.Content>
    </Select.Root>
    <Select.Root variant="secondary" :collection="collection">
      <Select.Trigger>
        <Select.ValueText placeholder="Secondary" />
      </Select.Trigger>
      <Select.Content>
        <Select.Item v-for="item in collection.items" :key="item" :item="item">
          {{ item }}
        </Select.Item>
      </Select.Content>
    </Select.Root>
  </div>
</template>
