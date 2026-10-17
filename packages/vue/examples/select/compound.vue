<script lang="ts" setup>
import { createListCollection } from "@ark-ui/vue/collection";
import { Select } from "@pisagor/vue";

const collection = createListCollection({
  items: ["Banana", "Apple", "Orange", "Pineapple"],
});
</script>

<template>
  <Select.Root :collection="collection">
    <Select.Trigger>
      <Select.ValueText placeholder="Select a fruit" />
    </Select.Trigger>
    <Select.Content>
      <Select.ItemGroup heading="Fruits">
        <Select.Item v-for="item in collection.items" :key="item" :item="item">
          {{ item }}
        </Select.Item>
      </Select.ItemGroup>
    </Select.Content>
  </Select.Root>
</template>
