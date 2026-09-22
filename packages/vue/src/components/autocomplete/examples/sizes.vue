<script setup lang="ts">
import { createListCollection } from "@ark-ui/vue/collection";

import { Autocomplete } from "..";

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
          <Autocomplete.Root :collection="collectionSm" @input-value-change="({ inputValue }) => filterSm(inputValue)">
            <Autocomplete.Input clearable show-trigger size="sm" />
            <Autocomplete.Content>
              <Autocomplete.Empty>No items found.</Autocomplete.Empty>
              <Autocomplete.List>
                <Autocomplete.Item v-for="item in collectionSm.items" :key="item.value" :item="item">
                  {{ item.label }}
                </Autocomplete.Item>
              </Autocomplete.List>
            </Autocomplete.Content>
          </Autocomplete.Root>
          <Autocomplete.Root :collection="collectionMd" @input-value-change="({ inputValue }) => filterMd(inputValue)">
            <Autocomplete.Input clearable show-trigger size="md" />
            <Autocomplete.Content>
              <Autocomplete.Empty>No items found.</Autocomplete.Empty>
              <Autocomplete.List>
                <Autocomplete.Item v-for="item in collectionMd.items" :key="item.value" :item="item">
                  {{ item.label }}
                </Autocomplete.Item>
              </Autocomplete.List>
            </Autocomplete.Content>
          </Autocomplete.Root>
          <Autocomplete.Root :collection="collectionLg" @input-value-change="({ inputValue }) => filterLg(inputValue)">
            <Autocomplete.Input clearable show-trigger size="lg" />
            <Autocomplete.Content>
              <Autocomplete.Empty>No items found.</Autocomplete.Empty>
              <Autocomplete.List>
                <Autocomplete.Item v-for="item in collectionLg.items" :key="item.value" :item="item">
                  {{ item.label }}
                </Autocomplete.Item>
              </Autocomplete.List>
            </Autocomplete.Content>
          </Autocomplete.Root>
        </div>
  
</template>
