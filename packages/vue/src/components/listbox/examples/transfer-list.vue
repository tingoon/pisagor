<script lang="ts" setup>
import { createListCollection } from "@ark-ui/vue/collection";
import { PhCaretLeft, PhCaretRight } from "@phosphor-icons/vue";
import { Button, Item } from "@pisagor/vue";
import { computed, ref } from "vue";
import { Listbox } from "..";

const available = ref(["React", "Solid", "Vue", "Svelte", "Angular", "Qwik"]);
const selected = ref([]);
const availableValue = ref([]);
const selectedValue = ref([]);

const availableCollection = computed(() =>
  createListCollection({
    items: available.value.map((label) => ({ label, value: label })),
  }),
);
const selectedCollection = computed(() =>
  createListCollection({
    items: selected.value.map((label) => ({ label, value: label })),
  }),
);

function onAvailableValueChange(details) {
  availableValue.value = details.value;
}
function onSelectedValueChange(details) {
  selectedValue.value = details.value;
}
function moveToSelected() {
  const moving = new Set(availableValue.value);
  selected.value = [...selected.value, ...available.value.filter((x) => moving.has(x))];
  available.value = available.value.filter((x) => !moving.has(x));
  availableValue.value = [];
}
function moveToAvailable() {
  const moving = new Set(selectedValue.value);
  available.value = [...available.value, ...selected.value.filter((x) => moving.has(x))];
  selected.value = selected.value.filter((x) => !moving.has(x));
  selectedValue.value = [];
}
</script>

<template>
  <div class="flex gap-2 max-sm:flex-col">
    <Item.Group variant="outline">
      <Item class="w-full p-1">
        <Listbox.Root
          class="min-h-40"
          selection-mode="multiple"
          :collection="availableCollection"
          :value="availableValue"
          @value-change="onAvailableValueChange"
        >
          <Listbox.Content>
            <Listbox.ItemGroup heading="Available">
              <Listbox.Item
                v-for="item in availableCollection.items"
                :key="item.value"
                :item="item"
              >
                <Listbox.ItemText>{{ item.label }}</Listbox.ItemText>
                <Listbox.ItemIndicator />
              </Listbox.Item>
            </Listbox.ItemGroup>
          </Listbox.Content>
        </Listbox.Root>
      </Item>
    </Item.Group>
    <div class="flex flex-row-reverse justify-center gap-2 sm:flex-col">
      <Button
        size="icon-md"
        variant="outline"
        :disabled="availableValue.length === 0"
        @click="moveToSelected"
      >
        <PhCaretRight />
      </Button>
      <Button
        size="icon-md"
        variant="outline"
        :disabled="selectedValue.length === 0"
        @click="moveToAvailable"
      >
        <PhCaretLeft />
      </Button>
    </div>
    <Item.Group variant="outline">
      <Item class="w-full p-1">
        <Listbox.Root
          class="min-h-40"
          selection-mode="multiple"
          :collection="selectedCollection"
          :value="selectedValue"
          @value-change="onSelectedValueChange"
        >
          <Listbox.Content class="max-h-48 min-h-40">
            <Listbox.ItemGroup heading="Selected">
              <Listbox.Item v-for="item in selectedCollection.items" :key="item.value" :item="item">
                <Listbox.ItemText>{{ item.label }}</Listbox.ItemText>
                <Listbox.ItemIndicator />
              </Listbox.Item>
            </Listbox.ItemGroup>
          </Listbox.Content>
        </Listbox.Root>
      </Item>
    </Item.Group>
  </div>
</template>
