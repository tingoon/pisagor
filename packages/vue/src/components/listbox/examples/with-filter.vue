<script lang="ts" setup>
import { useListCollection } from "@ark-ui/vue/collection";
import { useFilter } from "@ark-ui/vue/locale";
import { Input, Item } from "@pisagor/vue";
import { computed, ref } from "vue";
import { Listbox } from "..";

const search = ref("");
const filterUtils = useFilter({ sensitivity: "base" });
const { collection, filter } = useListCollection({
  filter: filterUtils.value.contains,
  initialItems: [
    { label: "Brazil", value: "br" },
    { label: "Mexico", value: "mx" },
    { label: "Ireland", value: "ie" },
  ],
});

const isEmpty = computed(
  () => collection.value.items.length === 0 && search.value !== "",
);

function onSearchChange(next: string) {
  search.value = next;
  filter(next);
}
</script>

<template>
  <Item.Group variant="outline">
    <Item class="flex flex-col gap-2 p-1">
      <Input
        placeholder="Search..."
        :value="search"
        @value-change="onSearchChange"
      />
      <Listbox.Root :collection="collection">
        <Listbox.Content>
          <Listbox.Item
            v-for="item in collection.items"
            :key="item.value"
            :item="item"
          >
            <Listbox.ItemText>{{ item.label }}</Listbox.ItemText>
            <Listbox.ItemIndicator />
          </Listbox.Item>
          <Listbox.Empty v-if="isEmpty"
            >No results found. Try a different search.</Listbox.Empty
          >
        </Listbox.Content>
      </Listbox.Root>
    </Item>
  </Item.Group>
</template>
