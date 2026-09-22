<script setup lang="ts">
import { createListCollection } from "@ark-ui/vue/collection";

import { Combobox } from "..";

const initialItems = [
  { label: "React", value: "react" },
  { label: "Vue", value: "vue" },
  { label: "Svelte", value: "svelte" },
  { label: "Solid", value: "solid" },
];

const collection = createListCollection({ items: initialItems });

function filter(_inputValue: string) {}
</script>

<template>
        <Combobox.Root
          :collection="collection"
          multiple
          @input-value-change="({ inputValue }) => filter(inputValue)"
        >
          <Combobox.Input placeholder="Select frameworks..." />
          <Combobox.Content>
            <Combobox.List>
              <Combobox.Item v-for="item in collection.items" :key="item.value" :item="item">
                {{ item.label }}
              </Combobox.Item>
            </Combobox.List>
          </Combobox.Content>
        </Combobox.Root>
  
</template>
