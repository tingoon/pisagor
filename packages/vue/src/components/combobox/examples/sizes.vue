<script lang="ts" setup>
import { createListCollection } from "@ark-ui/vue/collection";

import { Combobox } from "..";

const sizeItems = [
  { label: "Apple", value: "apple" },
  { label: "Banana", value: "banana" },
  { label: "Cherry", value: "cherry" },
  { label: "Date", value: "date" },
];

const collectionSm = createListCollection({ items: sizeItems });
const collectionMd = createListCollection({ items: sizeItems });
const collectionLg = createListCollection({ items: sizeItems });
function filterSm(_inputValue: string) {}
function filterMd(_inputValue: string) {}
function filterLg(_inputValue: string) {}
</script>

<template>
  <div class="flex flex-col gap-2">
    <Combobox.Root
      :collection="collectionSm"
      @input-value-change="({ inputValue }) => filterSm(inputValue)"
    >
      <Combobox.Input size="sm" />
      <Combobox.Content>
        <Combobox.List>
          <Combobox.Item v-for="item in collectionSm.items" :key="item.value" :item="item">
            {{ item.label }}
          </Combobox.Item>
        </Combobox.List>
      </Combobox.Content>
    </Combobox.Root>
    <Combobox.Root
      :collection="collectionMd"
      @input-value-change="({ inputValue }) => filterMd(inputValue)"
    >
      <Combobox.Input size="md" />
      <Combobox.Content>
        <Combobox.List>
          <Combobox.Item v-for="item in collectionMd.items" :key="item.value" :item="item">
            {{ item.label }}
          </Combobox.Item>
        </Combobox.List>
      </Combobox.Content>
    </Combobox.Root>
    <Combobox.Root
      :collection="collectionLg"
      @input-value-change="({ inputValue }) => filterLg(inputValue)"
    >
      <Combobox.Input size="lg" />
      <Combobox.Content>
        <Combobox.List>
          <Combobox.Item v-for="item in collectionLg.items" :key="item.value" :item="item">
            {{ item.label }}
          </Combobox.Item>
        </Combobox.List>
      </Combobox.Content>
    </Combobox.Root>
  </div>
</template>
