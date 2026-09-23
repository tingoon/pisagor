<script lang="ts" setup >
import { Item } from "@pisagor/vue";
import { Listbox } from "..";

const collection = createListCollection({
  items: [
    {
      description: "South America's country, Portuguese speaking.",
      label: "Brazil",
      value: "br",
    },
    {
      description: "North America's country, Spanish speaking.",
      label: "Mexico",
      value: "mx",
    },
    {
      description: "Europe's country, Irish/English speaking.",
      label: "Ireland",
      value: "ie",
    },
  ],
});
</script>

<template>
        <Item.Group variant="outline">
        <Item class="p-1">
          <Listbox.Root :collection="collection">
            <Listbox.Content>
              <Listbox.Item v-for="item in collection.items" :key="item.value" :item="item">
                <div class="flex min-w-0 flex-1 flex-col gap-0.5">
                  <Listbox.ItemText>{{ item.label }}</Listbox.ItemText>
                  <span class="text-muted-foreground text-xs">{{ item.description }}</span>
                </div>
                <Listbox.ItemIndicator />
              </Listbox.Item>
            </Listbox.Content>
          </Listbox.Root>
        </Item>
        </Item.Group>
  
</template>
