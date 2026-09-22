<script setup lang="ts">
import { createListCollection } from "@ark-ui/vue/collection";

import { Surface } from "@pisagor/vue";
import { Combobox } from "..";

const initialItems = [
  { label: "Apple", value: "apple" },
  { label: "Banana", value: "banana" },
  { label: "Cherry", value: "cherry" },
  { label: "Date", value: "date" },
];

const collection = createListCollection({ items: initialItems });

function filter(_inputValue: string) {}
</script>

<template>
        <Surface bordered padding="md" variant="default">
          <div class="flex flex-col gap-2">
            <Combobox.Root
              :collection="collection"
              variant="primary"
              @input-value-change="({ inputValue }) => filter(inputValue)"
            >
              <Combobox.Input placeholder="Primary" />
              <Combobox.Content>
                <Combobox.List>
                  <Combobox.Item v-for="item in collection.items" :key="item.value" :item="item">
                    {{ item.label }}
                  </Combobox.Item>
                </Combobox.List>
              </Combobox.Content>
            </Combobox.Root>
            <Combobox.Root
              :collection="collection"
              variant="secondary"
              @input-value-change="({ inputValue }) => filter(inputValue)"
            >
              <Combobox.Input placeholder="Secondary" />
              <Combobox.Content>
                <Combobox.List>
                  <Combobox.Item v-for="item in collection.items" :key="item.value" :item="item">
                    {{ item.label }}
                  </Combobox.Item>
                </Combobox.List>
              </Combobox.Content>
            </Combobox.Root>
          </div>
        </Surface>
  
</template>
