<script lang="ts" setup>
import { createListCollection } from "@ark-ui/vue";
import { PhCheck } from "@phosphor-icons/vue";
import { Autocomplete, Combobox, InputGroup } from "@pisagor/vue";
import { computed } from "vue";

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

const collection = createListCollection({
  groupBy: (item) => item.continent,
  items: initialItems,
});

function filter(_inputValue: string) {}
</script>

<template>
  <Autocomplete.Root
    :collection="collection"
    @input-value-change="({ inputValue }) => filter(inputValue)"
  >
    <Autocomplete.Control>
      <InputGroup>
        <Autocomplete.Input as-child>
          <InputGroup.Input placeholder="Select a timezone" />
        </Autocomplete.Input>
      </InputGroup>
    </Autocomplete.Control>
    <Teleport to="body">
      <Combobox.Positioner>
        <Autocomplete.Content class="w-60">
          <Autocomplete.Empty>
            No results found. Try a different search.
          </Autocomplete.Empty>
          <Autocomplete.List>
            <Autocomplete.ItemGroup
              v-for="[continent, group] in groups"
              :key="continent"
            >
              <Autocomplete.ItemGroupLabel>
                {{ continent }}
              </Autocomplete.ItemGroupLabel>
              <Autocomplete.Item
                v-for="item in group"
                :key="item.value"
                :item="item"
                persist-focus
              >
                {{ item.label }}
                <Combobox.ItemIndicator>
                  <PhCheck />
                </Combobox.ItemIndicator>
              </Autocomplete.Item>
            </Autocomplete.ItemGroup>
          </Autocomplete.List>
        </Autocomplete.Content>
      </Combobox.Positioner>
    </Teleport>
  </Autocomplete.Root>
</template>
