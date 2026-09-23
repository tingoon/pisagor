<script lang="ts" setup >
import { createListCollection } from "@ark-ui/vue/collection";

import { computed } from "vue";

import { Autocomplete } from "..";

const initialItems = [
  { continent: "North America", label: "Canada", value: "ca" },
  { continent: "North America", label: "United States", value: "us" },
  { continent: "North America", label: "Mexico", value: "mx" },
  { continent: "Europe", label: "United Kingdom", value: "uk" },
  { continent: "Europe", label: "Germany", value: "de" },
  { continent: "Europe", label: "France", value: "fr" },
  { continent: "Asia", label: "Japan", value: "jp" },
  { continent: "Asia", label: "South Korea", value: "kr" },
  { continent: "Asia", label: "China", value: "cn" },
];

const groups = computed(() => collection.group());

const collection = createListCollection({ groupBy: (item) => item.continent, items: initialItems });

function filter(_inputValue: string) {}
</script>

<template>
        <Autocomplete.Root
          :collection="collection"
          @input-value-change="({ inputValue }) => filter(inputValue)"
        >
          <Autocomplete.Input placeholder="Select a timezone" />
          <Autocomplete.Content class="w-60">
            <Autocomplete.Empty />
            <Autocomplete.List>
              <Autocomplete.ItemGroup
                v-for="[continent, group] in groups"
                :key="continent"
                :heading="continent"
              >
                <Autocomplete.Item v-for="item in group" :key="item.value" :item="item">
                  {{ item.label }}
                </Autocomplete.Item>
              </Autocomplete.ItemGroup>
            </Autocomplete.List>
          </Autocomplete.Content>
        </Autocomplete.Root>
  
</template>
