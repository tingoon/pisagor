<script lang="ts" setup >
import { Field } from "@pisagor/vue";
import { Listbox } from "..";

const collection = createListCollection({
  items: [
    { artist: "Harbor Lights", title: "Midnight Pier" },
    { artist: "The Night Owls", title: "Quiet Hours" },
    { artist: "Neon Pulse", title: "Glass Orchard" },
    { artist: "Copper Vein", title: "Northbound" },
  ],
  itemToString: (item) => item.title,
  itemToValue: (item) => item.title,
});
</script>

<template>
        <Field>
          <Field.Label>Favorite album</Field.Label>
          <Listbox.Root orientation="horizontal" :collection="collection" >
            <Listbox.Content class="overflow-x-auto">
              <Listbox.Item
                class="w-full flex-col items-start"
                v-for="item in collection.items"
                :key="item.title"
                :item="item"
              >
                <div class="aspect-square size-20 w-full rounded-lg bg-foreground" />
                <div>
                  <Listbox.ItemText>{{ item.title }}</Listbox.ItemText>
                  <p class="text-muted-foreground text-xs">{{ item.artist }}</p>
                </div>
                <Listbox.ItemIndicator class="absolute top-4 right-4 shrink-0 rounded-xs bg-background [&_svg]:text-foreground!" />
              </Listbox.Item>
            </Listbox.Content>
          </Listbox.Root>
        </Field>
  
</template>
