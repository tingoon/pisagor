<script setup lang="ts">
import { Item, Kbd } from "@pisagor/vue";
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
        <div class="flex flex-col gap-2">
          <p class="text-center text-muted-foreground text-sm">
            Hold <Kbd>⌘</Kbd> or <Kbd>Ctrl</Kbd> to select multiple
          </p>
          <Item.Group variant="outline">
          <Item class="w-full p-1">
            <Listbox.Root :collection="collection" selectionMode="extended">
              <Listbox.Content>
                <Listbox.Item v-for="item in collection.items" :key="item.value" :item="item">
                  <Listbox.ItemText>{{ item.label }}</Listbox.ItemText>
                  <Listbox.ItemIndicator />
                </Listbox.Item>
              </Listbox.Content>
            </Listbox.Root>
          </Item>
          </Item.Group>
        </div>
  
</template>
