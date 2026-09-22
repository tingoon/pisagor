<script setup lang="ts">
import { createListCollection } from "@ark-ui/vue/collection";
import { Select } from "..";

const collection = createListCollection({
  items: [] as Array<{ label: string; value: string }>,
});
</script>

<template>
  <Select.Root :collection="collection">
    <Select.Trigger>
      <Select.ValueText placeholder="Select framework" />
    </Select.Trigger>
    <Select.Content>
      <Select.ItemGroup>
        <Select.Item v-for="item in collection.items" :key="item.value" :item="item">
          {{ item.label }}
        </Select.Item>
      </Select.ItemGroup>
      <div class="px-2 py-6 text-center text-muted-foreground text-sm">No frameworks found</div>
    </Select.Content>
  </Select.Root>
</template>
