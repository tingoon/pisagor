<script lang="ts" setup>
import { Sortable } from "@pisagor/vue";
import { ref } from "vue";

const labels: Record<string, string> = {
  a: "Design system tokens",
  b: "Component APIs",
  c: "Storybook coverage",
  d: "Accessibility checks",
};

const items = ref(["a", "b", "c"]);
function onValueChange(next: string[]) {
  items.value = next;
}
</script>

<template>
  <Sortable :items="items" @value-change="onValueChange">
    <Sortable.Item v-for="id in items" :key="id" :value="id">
      <Sortable.ItemContent>
        <span class="font-medium text-sm">{{ labels[id] }}</span>
      </Sortable.ItemContent>
    </Sortable.Item>
  </Sortable>
</template>
