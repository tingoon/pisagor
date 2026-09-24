<script lang="ts" setup>
import { createListCollection } from "@ark-ui/vue/collection";

import { Surface } from "@pisagor/vue";
import { Select } from "..";

const initialItems = [
  { label: "Apple", value: "apple" },
  { label: "Banana", value: "banana" },
  { label: "Cherry", value: "cherry" },
  { label: "Date", value: "date" },
];

const collection = createListCollection({ items: initialItems });
</script>

<template>
  <Surface bordered padding="md" variant="default">
    <div class="flex flex-col gap-2">
      <Select.Root variant="primary" :collection="collection">
        <Select.Trigger>
          <Select.ValueText placeholder="Primary" />
        </Select.Trigger>
        <Select.Content>
          <Select.Item v-for="item in collection.items" :key="item" :item="item">
            {{ item }}
          </Select.Item>
        </Select.Content>
      </Select.Root>
      <Select.Root variant="secondary" :collection="collection">
        <Select.Trigger>
          <Select.ValueText placeholder="Secondary" />
        </Select.Trigger>
        <Select.Content>
          <Select.Item v-for="item in collection.items" :key="item" :item="item">
            {{ item }}
          </Select.Item>
        </Select.Content>
      </Select.Root>
    </div>
  </Surface>
</template>
