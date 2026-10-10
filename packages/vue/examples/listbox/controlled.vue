<script lang="ts" setup>
import { createListCollection } from "@ark-ui/vue/collection";
import { Item, Listbox } from "@pisagor/vue";
import { computed, ref } from "vue";

const value = ref(["md"]);
const collection = createListCollection({
  items: [
    { label: "Small", value: "sm" },
    { label: "Medium", value: "md" },
    { label: "Large", value: "lg" },
    { label: "Extra Large", value: "xl" },
  ],
});
const isLarge = computed(() => value.value.includes("lg"));
function onValueChange(next: string | string[]) {
  value.value = Array.isArray(next) ? next : [next];
}
</script>

<template>
  <div class="flex flex-col gap-2">
    <p class="text-center text-muted-foreground text-sm">
      Selected the Large size
    </p>
    <Item.Group variant="outline">
      <Item class="p-1">
        <Listbox.Root
          :collection="collection"
          :value="value"
          @value-change="onValueChange"
        >
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
    <p class="text-center text-muted-foreground text-sm">
      {{ isLarge ? "✅" : "❌" }}
    </p>
  </div>
</template>
