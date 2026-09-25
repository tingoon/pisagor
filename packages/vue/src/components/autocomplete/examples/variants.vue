<script lang="ts" setup>
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
  <div class="flex flex-col gap-2">
    <Autocomplete.Root
      variant="primary"
      :collection="collection"
      @input-value-change="({ inputValue }) => filter(inputValue)"
    >
      <Autocomplete.Input placeholder="Primary" />
      <Autocomplete.Content>
        <Autocomplete.List>
          <Autocomplete.Item
            v-for="item in collection.items"
            :key="item.value"
            :item="item"
          >
            {{ item.label }}
          </Autocomplete.Item>
        </Autocomplete.List>
      </Autocomplete.Content>
    </Autocomplete.Root>
    <Autocomplete.Root
      variant="secondary"
      :collection="collection"
      @input-value-change="({ inputValue }) => filter(inputValue)"
    >
      <Autocomplete.Input placeholder="Secondary" />
      <Autocomplete.Content>
        <Autocomplete.List>
          <Autocomplete.Item
            v-for="item in collection.items"
            :key="item.value"
            :item="item"
          >
            {{ item.label }}
          </Autocomplete.Item>
        </Autocomplete.List>
      </Autocomplete.Content>
    </Autocomplete.Root>
  </div>
</template>
