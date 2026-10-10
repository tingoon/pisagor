<script lang="ts" setup>
import { Sortable } from "@pisagor/vue";
import { ref } from "vue";

const labels: Record<string, string> = {
  a: "Design system tokens",
  b: "Component APIs",
  c: "Storybook coverage",
  d: "Accessibility checks",
};

const items = ref(["a", "b", "c", "d"]);
function onValueChange(next: string[]) {
  items.value = next;
}
</script>

<template>
  <Sortable
    orientation="horizontal"
    :items="items"
    @value-change="onValueChange"
  >
    <Sortable.Item class="min-w-36" v-for="id in items" :key="id" :value="id">
      <Sortable.ItemContent>
        <Sortable.Handle />
        <span class="font-medium text-sm">{{ labels[id] }}</span>
      </Sortable.ItemContent>
    </Sortable.Item>
  </Sortable>
</template>
