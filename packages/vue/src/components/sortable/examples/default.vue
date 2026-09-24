<script lang="ts" setup>
import { Sortable } from "..";

const _labels: Record<string, string> = {
  a: "Design system tokens",
  b: "Component APIs",
  c: "Storybook coverage",
  d: "Accessibility checks",
};

import { ref } from "vue";

const items = ref(["a", "b", "c", "d"]);
const onValueChange = setItems;
</script>

<template>
  <div class="flex w-full flex-col gap-3">
    <p class="text-muted-foreground text-sm">
      Drag from the handle, or focus an item and press Alt+Arrow to move it.
    </p>
    <Sortable :items="items" @value-change="onValueChange">
      <Sortable.Item v-for="id in items" :key="id" :value="id">
        <Sortable.ItemContent>
          <Sortable.Handle />
          <span class="font-medium text-sm">{{ labels[id] }}</span>
        </Sortable.ItemContent>
      </Sortable.Item>
    </Sortable>
  </div>
</template>
