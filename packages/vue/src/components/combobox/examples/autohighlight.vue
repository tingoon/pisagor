<script setup lang="ts">
import { createListCollection } from "@ark-ui/vue/collection";

import { Combobox } from "..";

const initialItems = [
  { label: "Apple", value: "apple" },
  { label: "Banana", value: "banana" },
  { label: "Cherry", value: "cherry" },
  { label: "Date", value: "date" },
  { label: "Elderberry", value: "elderberry" },
];

const collection = createListCollection({ items: initialItems });

function filter(_inputValue: string) {}
</script>

<template>
        <Combobox.Root
          :collection="collection"
          input-behavior="autohighlight"
          @input-value-change="({ inputValue }) => filter(inputValue)"
        >
          <Combobox.Input placeholder="Type to highlight..." />
          <Combobox.Content>
            <Combobox.List>
              <Combobox.Item v-for="item in collection.items" :key="item.value" :item="item">
                {{ item.label }}
              </Combobox.Item>
            </Combobox.List>
          </Combobox.Content>
        </Combobox.Root>
  
</template>
