<script lang="ts" setup >
import { Item } from "@pisagor/vue";
import { Listbox } from "..";

const collection = createListCollection({
  groupBy: (item) => (item as { region: string }).region,
  items: [
    { label: "Brazil", region: "South America", value: "br" },
    { label: "Colombia", region: "South America", value: "co" },
    { label: "Mexico", region: "North America", value: "mx" },
    { label: "Canada", region: "North America", value: "ca" },
  ],
});
</script>

<template>
        <Item.Group variant="outline">
        <Item class="p-1">
          <Listbox.Root :collection="collection">
            <Listbox.Content>
              <Listbox.ItemGroup
                v-for="[region, items] in collection.group()"
                :key="region"
                :heading="region"
              >
                <Listbox.Item v-for="item in items" :key="item.value" :item="item">
                  <Listbox.ItemText>{{ item.label }}</Listbox.ItemText>
                  <Listbox.ItemIndicator />
                </Listbox.Item>
              </Listbox.ItemGroup>
            </Listbox.Content>
          </Listbox.Root>
        </Item>
        </Item.Group>
  
</template>
