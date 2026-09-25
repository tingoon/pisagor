<script lang="ts" setup>
import { Item } from "@pisagor/vue";
import { Listbox } from "..";

const collection = createListCollection({
  items: [
    { icon: "🇧🇷", label: "Brazil", value: "brazil" },
    { icon: "🇲🇽", label: "Mexico", value: "mexico" },
    { icon: "🇮🇪", label: "Ireland", value: "ireland" },
  ],
});
</script>

<template>
  <Item.Group variant="outline">
    <Item class="p-1">
      <Listbox.Root :collection="collection">
        <Listbox.Content>
          <Listbox.Item
            v-for="item in collection.items"
            :key="item.value"
            :item="item"
          >
            {{ item.icon }}
            <Listbox.ItemText>{{ item.label }}</Listbox.ItemText>
            <Listbox.ItemIndicator />
          </Listbox.Item>
        </Listbox.Content>
      </Listbox.Root>
    </Item>
  </Item.Group>
</template>
