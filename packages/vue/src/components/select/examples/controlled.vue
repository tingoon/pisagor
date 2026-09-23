<script lang="ts" setup >
import { createListCollection } from "@ark-ui/vue/collection";
import { ref } from "vue";
import { Select } from "..";

const value = ref(["react"]);
const collection = createListCollection({
  items: [
    { label: "React", value: "react" },
    { label: "Vue", value: "vue" },
    { label: "Svelte", value: "svelte" },
  ],
});
const onValueChange = (value) => setValue(Array.isArray(value) ? value : [value]);
</script>

<template>
        <Select.Root :collection="collection" :value="value" @value-change="onValueChange" >
          <Select.Trigger>
            <Select.ValueText placeholder="Select a framework" />
          </Select.Trigger>
          <Select.Content>
            <Select.Item v-for="item in collection.items" :key="item.value" :item="item">
              {{ item.label }}
            </Select.Item>
          </Select.Content>
        </Select.Root>
  
</template>
