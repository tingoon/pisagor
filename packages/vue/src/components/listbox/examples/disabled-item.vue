<script setup lang="ts">
import { Item } from "@pisagor/vue";
import { Listbox } from "..";

const collection = createListCollection({
  items: [
    { label: "Free", value: "free" },
    { label: "Pro", value: "pro" },
    {
      disabled: true,
      label: "Enterprise",
      value: "enterprise",
    },
    { label: "Custom", value: "custom" },
  ],
});
</script>

<template>
        <Item.Group variant="outline">
        <Item class="p-1">
          <Listbox.Root :collection="collection">
            <Listbox.Content>
              <Listbox.Item v-for="item in collection.items" :key="item.value" :item="item">
                <Listbox.ItemText>{{ item.label }}</Listbox.ItemText>
                <Listbox.ItemIndicator />
              </Listbox.Item>
            </Listbox.Content>
          </Listbox.Root>
        </Item>
        </Item.Group>
  
</template>
