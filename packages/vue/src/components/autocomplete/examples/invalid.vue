<script setup lang="ts">
import { createListCollection } from "@ark-ui/vue/collection";

import { Autocomplete } from "..";

const initialItems = [
  { label: "Apple", value: "apple" },
  { label: "Banana", value: "banana" },
  { label: "Cherry", value: "cherry" },
];

const collection = createListCollection({ items: initialItems });

function filter(_inputValue: string) {}
</script>

<template>
        <Autocomplete.Root
          :collection="collection"
          invalid
          @input-value-change="({ inputValue }) => filter(inputValue)"
        >
          <Autocomplete.Input placeholder="Select a fruit..." />
          <Autocomplete.Content>
            <Autocomplete.Empty />
            <Autocomplete.List>
              <Autocomplete.Item v-for="item in collection.items" :key="item.value" :item="item">
                {{ item.label }}
              </Autocomplete.Item>
            </Autocomplete.List>
          </Autocomplete.Content>
        </Autocomplete.Root>
  
</template>
