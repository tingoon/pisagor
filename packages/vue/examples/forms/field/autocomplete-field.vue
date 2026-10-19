<script lang="ts" setup>
import { createListCollection } from "@ark-ui/vue";
import { PhCheck } from "@phosphor-icons/vue";
import { Autocomplete, Combobox, Field, InputGroup } from "@pisagor/vue";

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
      <Autocomplete.Control>
        <InputGroup>
          <Autocomplete.Input as-child>
            <InputGroup.Input
              aria-label="Search items"
              placeholder="Search items…"
            />
          </Autocomplete.Input>
        </InputGroup>
      </Autocomplete.Control>
      <Teleport to="body">
        <Combobox.Positioner>
          <Autocomplete.Content>
            <Autocomplete.Empty>No items found.</Autocomplete.Empty>
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
    <Field.Description>Select an item.</Field.Description>
  </Field>
</template>
