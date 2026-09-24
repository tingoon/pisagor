<script lang="ts" setup>
import { createListCollection } from "@ark-ui/vue/collection";
import { ref } from "vue";
import { Combobox } from "..";

const value = ref<string | undefined>("banana");
const initialItems = [
  { label: "Apple", value: "apple" },
  { label: "Banana", value: "banana" },
  { label: "Cherry", value: "cherry" },
  { label: "Date", value: "date" },
];

const collection = createListCollection({ items: initialItems });

function handleValueChange(next: string[]) {
  value.value = next[0];
}

function filter(_inputValue: string) {}
</script>

<template>
  <div class="flex flex-col gap-2">
    <Combobox.Root
      class="w-full"
      :collection="collection"
      :input-value="value"
      @input-value-change="({ inputValue }) => filter(inputValue)"
      @value-change="handleValueChange"
    >
      <Combobox.Input placeholder="Select a fruit..." />
      <Combobox.Content>
        <Combobox.List>
          <Combobox.Item v-for="item in collection.items" :key="item.value" :item="item">
            {{ item.label }}
          </Combobox.Item>
        </Combobox.List>
      </Combobox.Content>
    </Combobox.Root>
    <p class="text-center text-muted-foreground text-sm">Selected: {{ value ?? "(none)" }}</p>
  </div>
</template>
