<script lang="ts" setup>
import { createListCollection } from "@ark-ui/vue/collection";

import { ref } from "vue";

import { Autocomplete } from "..";

const initialItems = [
  { label: "Apple", value: "apple" },
  { label: "Banana", value: "banana" },
  { label: "Cherry", value: "cherry" },
  { label: "Date", value: "date" },
];
const value = ref();
function handleValueChange(details?: { value?: unknown; page?: unknown }) {
  if (details && "value" in details) value.value = details.value;
  else if (details && "page" in details) value.value = details.page;
}

const collection = createListCollection({ items: initialItems });

function filter(_inputValue: string) {}
</script>

<template>
  <div class="flex flex-col gap-2">
    <Autocomplete.Root
      class="w-full"
      :collection="collection"
      :value="value ? [value] : []"
      @input-value-change="({ inputValue }) => filter(inputValue)"
      @value-change="handleValueChange"
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
    <p class="text-center text-muted-foreground text-sm">Selected: {{ value ?? "(none)" }}</p>
  </div>
</template>
