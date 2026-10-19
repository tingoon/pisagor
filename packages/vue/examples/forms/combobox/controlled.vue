<script lang="ts" setup>
import { createListCollection } from "@ark-ui/vue";
import { PhCaretUpDown, PhCheck } from "@phosphor-icons/vue";
import { Combobox, InputGroup } from "@pisagor/vue";
import { ref } from "vue";

const value = ref<string | undefined>("banana");
const initialItems = [
  { label: "Apple", value: "apple" },
  { label: "Banana", value: "banana" },
  { label: "Cherry", value: "cherry" },
  { label: "Date", value: "date" },
];

const collection = createListCollection({ items: initialItems });

function handleValueChange(details: { value: string[] }) {
  value.value = details.value[0];
}

function filter(_inputValue: string) {}
</script>

<template>
  <div class="flex flex-col gap-2">
    <Combobox.Root
      class="w-full"
      :collection="collection"
      :input-value="value"
      @input-value-change="({ inputValue }) => filter(inputValue)"
      @value-change="handleValueChange"
    >
      <Combobox.Control>
        <InputGroup>
          <Combobox.Input as-child>
            <InputGroup.Input placeholder="Select a fruit..." />
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
    <p class="text-muted-foreground text-center text-sm">
      Selected: {{ value ?? "(none)" }}
    </p>
  </div>
</template>
