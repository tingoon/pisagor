<script lang="ts" setup >
import { createListCollection } from "@ark-ui/vue/collection";

import { Autocomplete } from "@pisagor/vue";
import { Field } from "..";

const initialItems = [
  { label: "Apple", value: "apple" },
  { label: "Banana", value: "banana" },
  { label: "Orange", value: "orange" },
  { label: "Grape", value: "grape" },
  { label: "Strawberry", value: "strawberry" },
  { label: "Mango", value: "mango" },
  { label: "Pineapple", value: "pineapple" },
  { label: "Kiwi", value: "kiwi" },
  { label: "Peach", value: "peach" },
  { label: "Pear", value: "pear" },
];

const collection = createListCollection({ items: initialItems });

function filter(_inputValue: string) {}
</script>

<template>
        <Field>
          <Field.Label>Fruits</Field.Label>
          <Autocomplete.Root
            :collection="collection"
            @input-value-change="({ inputValue }) => filter(inputValue)"
          >
            <Autocomplete.Input aria-label="Search items" placeholder="Search items…" />
            <Autocomplete.Content>
              <Autocomplete.Empty>No items found.</Autocomplete.Empty>
              <Autocomplete.List>
                <Autocomplete.Item v-for="item in collection.items" :key="item.value" :item="item">
                  {{ item.label }}
                </Autocomplete.Item>
              </Autocomplete.List>
            </Autocomplete.Content>
          </Autocomplete.Root>
          <Field.Description>Select an item.</Field.Description>
        </Field>
  
</template>
