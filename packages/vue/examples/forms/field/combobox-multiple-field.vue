<script lang="ts" setup>
import { createListCollection } from "@ark-ui/vue";
import { PhCaretUpDown, PhCheck } from "@phosphor-icons/vue";
import { Combobox, Field, InputGroup } from "@pisagor/vue";

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
      multiple
      :collection="collection"
      @input-value-change="({ inputValue }) => filter(inputValue)"
    >
      <Combobox.Control>
        <InputGroup>
          <Combobox.Input as-child>
            <InputGroup.Input
              aria-label="Select items"
              placeholder="Select items…"
            />
          </Combobox.Input>
          <InputGroup.Addon align="inline-end">
            <InputGroup.Button as-child size="icon-xs" variant="ghost">
              <Combobox.Trigger>
                <PhCaretUpDown aria-hidden />
              </Combobox.Trigger>
            </InputGroup.Button>
          </InputGroup.Addon>
        </InputGroup>
      </Combobox.Control>
      <Teleport to="body">
        <Combobox.Positioner>
          <Combobox.Content>
            <Combobox.List>
              <Combobox.Item
                v-for="item in collection.items"
                :key="item.value"
                :item="item"
                persist-focus
              >
                {{ item.label }}
                <Combobox.ItemIndicator>
                  <PhCheck />
                </Combobox.ItemIndicator>
              </Combobox.Item>
            </Combobox.List>
          </Combobox.Content>
        </Combobox.Positioner>
      </Teleport>
    </Combobox.Root>
    <Field.Description>Select multiple items.</Field.Description>
  </Field>
</template>
