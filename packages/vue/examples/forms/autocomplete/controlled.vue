<script lang="ts" setup>
import { createListCollection } from "@ark-ui/vue";
import { PhCheck } from "@phosphor-icons/vue";
import { Autocomplete, Combobox, InputGroup } from "@pisagor/vue";
import { ref } from "vue";

const initialItems = [
  { label: "Apple", value: "apple" },
  { label: "Banana", value: "banana" },
  { label: "Cherry", value: "cherry" },
  { label: "Date", value: "date" },
];

const value = ref<string | undefined>("banana");
const collection = createListCollection({ items: initialItems });

function handleValueChange(details: { value: string[] }) {
  value.value = details.value[0];
}

function filter(_inputValue: string) {}
</script>

<template>
  <div class="flex flex-col gap-2">
    <Autocomplete.Root
      class="w-full"
      :collection="collection"
      :value="value ? [value] : []"
      @input-value-change="({ inputValue }) => filter(inputValue)"
      @value-change="handleValueChange"
    >
      <Autocomplete.Control>
        <InputGroup>
          <Autocomplete.Input as-child>
            <InputGroup.Input placeholder="Select a fruit..." />
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
    <p class="text-muted-foreground text-center text-sm">
      Selected: {{ value ?? "(none)" }}
    </p>
  </div>
</template>
