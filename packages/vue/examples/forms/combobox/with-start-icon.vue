<script lang="ts" setup>
import { createListCollection } from "@ark-ui/vue";
import { PhAppleLogo, PhCaretUpDown, PhCheck } from "@phosphor-icons/vue";
import { Combobox, InputGroup } from "@pisagor/vue";

const initialItems = [
  { label: "Apple", value: "apple" },
  { label: "Banana", value: "banana" },
  { label: "Cherry", value: "cherry" },
];

const collection = createListCollection({ items: initialItems });

function filter(_inputValue: string) {}
</script>

<template>
  <Combobox.Root
    :collection="collection"
    @input-value-change="
      (details: { inputValue: string }) => filter(details.inputValue)
    "
  >
    <Combobox.Control>
      <InputGroup>
        <InputGroup.Addon align="inline-start">
          <PhAppleLogo />
        </InputGroup.Addon>
        <Combobox.Input as-child>
          <InputGroup.Input placeholder="Search fruits..." />
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
</template>
