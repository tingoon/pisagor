<script lang="ts" setup>
import { createListCollection } from "@ark-ui/vue/collection";

import { Combobox } from "..";

const initialItems = [
  { label: "Apple", value: "apple" },
  { label: "Banana", value: "banana" },
  { label: "Cherry", value: "cherry" },
  { label: "Date", value: "date" },
];

const collection = createListCollection({ items: initialItems });

function filter(_inputValue: string) {}
</script>

<template>
  <Combobox.Root
    :collection="collection"
    @input-value-change="({ inputValue }) => filter(inputValue)"
  >
    <Combobox.Input placeholder="Search..." />
    <Combobox.Content class="max-h-60">
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
