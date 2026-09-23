<script lang="ts" setup >
import { createListCollection } from "@ark-ui/vue/collection";

import { Input, Item } from "@pisagor/vue";
import { ref } from "vue";
import { Listbox } from "..";

const search = ref("");
const initialItems = [
  { label: "Brazil", value: "br" },
  { label: "Mexico", value: "mx" },
  { label: "Ireland", value: "ie" },
];
const value = ref();
function onValueChange(details?: { value?: unknown; page?: unknown }) {
  if (details && "value" in details) value.value = details.value;
  else if (details && "page" in details) value.value = details.page;
}

const collection = createListCollection({ items: initialItems });
</script>

<template>
        <Item.Group variant="outline">
        <Item class="flex flex-col gap-2 p-1">
          <Input placeholder="Search..." :value="search" @value-change="onValueChange" />
          <Listbox.Root :collection="collection">
            <Listbox.Content>
              <Listbox.Item v-for="item in collection.items" :key="item.value" :item="item">
                <Listbox.ItemText>{{ item.label }}</Listbox.ItemText>
                <Listbox.ItemIndicator />
              </Listbox.Item>
              <Listbox.Empty v-if="isEmpty">No results found. Try a different search.</Listbox.Empty>
            </Listbox.Content>
          </Listbox.Root>
        </Item>
        </Item.Group>
  
</template>
