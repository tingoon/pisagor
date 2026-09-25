<script lang="ts" setup>
import { createListCollection } from "@ark-ui/vue/collection";

import { Surface } from "@pisagor/vue";
import { Autocomplete } from "..";

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
  <Surface bordered padding="md" variant="default">
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
  </Surface>
</template>
