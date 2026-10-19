<script lang="ts" setup>
import { createListCollection } from "@ark-ui/vue";
import { PhCaretUpDown, PhCheck } from "@phosphor-icons/vue";
import { Combobox, InputGroup } from "@pisagor/vue";

const initialItems = [
  { label: "React", value: "react" },
  { label: "Vue", value: "vue" },
  { label: "Svelte", value: "svelte" },
  { label: "Solid", value: "solid" },
];

const collection = createListCollection({ items: initialItems });

function filter(_inputValue: string) {}
</script>

<template>
  <Combobox.Root
    multiple
    :collection="collection"
    @input-value-change="({ inputValue }) => filter(inputValue)"
  >
    <Combobox.Control>
      <InputGroup>
        <Combobox.Input as-child>
          <InputGroup.Input placeholder="Select frameworks..." />
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
