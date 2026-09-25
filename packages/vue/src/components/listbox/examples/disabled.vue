<script lang="ts" setup>
import { Item } from "@pisagor/vue";
import { Listbox } from "..";

const collection = createListCollection({
  items: [
    { label: "Brazil", value: "br" },
    { label: "Mexico", value: "mx" },
    { label: "Ireland", value: "ie" },
  ],
});
</script>

<template>
  <Item.Group variant="outline">
    <Item class="p-1">
      <Listbox.Root disabled :collection="collection">
        <Listbox.Content>
          <Listbox.Item
            v-for="item in collection.items"
            :key="item.value"
            :item="item"
          >
            <Listbox.ItemText>{{ item.label }}</Listbox.ItemText>
            <Listbox.ItemIndicator />
          </Listbox.Item>
        </Listbox.Content>
      </Listbox.Root>
    </Item>
  </Item.Group>
</template>
