<script lang="ts" setup>
import { createListCollection } from "@ark-ui/vue/collection";

import { Combobox } from "..";

const initialItems = [
  { label: "Apple", value: "apple" },
  { label: "Banana", value: "banana" },
  { label: "Cherry", value: "cherry" },
];

const collection = createListCollection({ items: initialItems });

function filter(_inputValue: string) {}
</script>

<template>
  <Combobox.Root
    invalid
    :collection="collection"
    @input-value-change="({ inputValue }) => filter(inputValue)"
  >
    <Combobox.Input placeholder="Select a fruit..." />
    <Combobox.Content>
      <Combobox.List>
        <Combobox.Item
          v-for="item in collection.items"
          :key="item.value"
          :item="item"
        >
          {{ item.label }}
        </Combobox.Item>
      </Combobox.List>
    </Combobox.Content>
  </Combobox.Root>
</template>
