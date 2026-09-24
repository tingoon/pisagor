<script lang="ts" setup>
import { createListCollection } from "@ark-ui/vue/collection";
import { ref } from "vue";
import { Listbox } from "..";

const value = ref(["mountain"]);
const collection = createListCollection({
  items: [
    {
      alt: "Scenic mountain view",
      label: "Mountain Landscape",
      value: "mountain",
    },
    {
      alt: "Ocean waves",
      label: "Ocean Waves",
      value: "ocean",
    },
    {
      alt: "Forest path",
      label: "Forest Path",
      value: "forest",
    },
    {
      alt: "City skyline",
      label: "City Skyline",
      value: "city",
    },
    {
      alt: "Desert dunes",
      label: "Desert Dunes",
      value: "desert",
    },
  ],
});
const onValueChange = (value) => setValue(Array.isArray(value) ? value : [value]);
</script>

<template>
  <div class="flex flex-col gap-2 sm:flex-row">
    <Listbox.Root
      class="w-full"
      :collection="collection"
      :value="value"
      @value-change="onValueChange"
    >
      <Listbox.Content class="overflow-auto max-sm:flex-row">
        <Listbox.Item v-for="item in collection.items" :key="item.value" :item="item">
          <Listbox.ItemText>{{ item.label }}</Listbox.ItemText>
        </Listbox.Item>
      </Listbox.Content>
    </Listbox.Root>
    <div class="flex w-full items-end rounded-xl border bg-muted p-4">
      <div class="mt-auto">
        <h3 class="font-medium text-sm">{{ selectedImage?.label }}</h3>
        <p class="text-muted-foreground text-xs">{{ selectedImage?.alt }}</p>
      </div>
    </div>
  </div>
</template>
