<script lang="ts" setup>
import { Listbox } from "..";

const collection = createListCollection({
  items: [
    { label: "Brazil", value: "br" },
    { label: "Mexico", value: "mx" },
    { label: "Ireland", value: "ie" },
  ],
});
</script>

<template>
  <Listbox.Root :collection="collection" :default-value="['br']">
    <Listbox.Content>
      <Listbox.Item
        v-for="item in collection.items"
        :key="item.value"
        :item="item"
      >
        <Listbox.ItemText>{{ item.label }}</Listbox.ItemText>
        <Listbox.ItemIndicator />
      </Listbox.Item>
    </Listbox.Content>
  </Listbox.Root>
</template>
