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
