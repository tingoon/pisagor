<script setup lang="ts">
import { createListCollection } from "@ark-ui/vue/collection";
import { ref } from "vue";
import { Select } from "..";

const value = ref([]);
const collection = createListCollection({
  items: [
    { label: "JavaScript", value: "javascript" },
    { label: "TypeScript", value: "typescript" },
    { label: "Python", value: "python" },
    { label: "Rust", value: "rust" },
  ],
});
const onValueChange = handleValueChange;
</script>

<template>
        <Select.Root :collection="collection" multiple @value-change="onValueChange" :value="value">
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
