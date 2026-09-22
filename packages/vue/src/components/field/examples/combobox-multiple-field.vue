<script setup lang="ts">
import { createListCollection } from "@ark-ui/vue/collection";

import { Combobox } from "@pisagor/vue";
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
          <Combobox.Root
            :collection="collection"
            multiple
            @input-value-change="({ inputValue }) => filter(inputValue)"
          >
            <Combobox.Input aria-label="Select items" placeholder="Select items…" />
            <Combobox.Content>
              <Combobox.List>
                <Combobox.Item v-for="item in collection.items" :key="item.value" :item="item">
                  {{ item.label }}
                </Combobox.Item>
              </Combobox.List>
            </Combobox.Content>
          </Combobox.Root>
          <Field.Description>Select multiple items.</Field.Description>
        </Field>
  
</template>
