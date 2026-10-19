<script lang="ts" setup>
import { createListCollection } from "@ark-ui/vue";
import { PhAppleLogo, PhCheck } from "@phosphor-icons/vue";
import { Autocomplete, Combobox, InputGroup } from "@pisagor/vue";

const initialItems = [
  { label: "Apple", value: "apple" },
  { label: "Banana", value: "banana" },
  { label: "Cherry", value: "cherry" },
];

const collection = createListCollection({ items: initialItems });

function filter(_inputValue: string) {}
</script>

<template>
  <Autocomplete.Root
    :collection="collection"
    @input-value-change="({ inputValue }) => filter(inputValue)"
  >
    <Autocomplete.Control>
      <InputGroup>
        <InputGroup.Addon align="inline-start">
          <PhAppleLogo />
        </InputGroup.Addon>
        <Autocomplete.Input as-child>
          <InputGroup.Input placeholder="Search fruits..." />
        </Autocomplete.Input>
      </InputGroup>
    </Autocomplete.Control>
    <Teleport to="body">
      <Combobox.Positioner>
        <Autocomplete.Content>
          <Autocomplete.Empty>
            No results found. Try a different search.
          </Autocomplete.Empty>
          <Autocomplete.List>
            <Autocomplete.Item
              v-for="item in collection.items"
              :key="item.value"
              :item="item"
              persist-focus
            >
              {{ item.label }}
              <Combobox.ItemIndicator>
                <PhCheck />
              </Combobox.ItemIndicator>
            </Autocomplete.Item>
          </Autocomplete.List>
        </Autocomplete.Content>
      </Combobox.Positioner>
    </Teleport>
  </Autocomplete.Root>
</template>
