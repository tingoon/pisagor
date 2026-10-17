<script lang="ts">
import source from "./compound.vue?raw";
export { source };
</script>

<script lang="ts" setup>
import { ScrollArea } from "@pisagor/vue";

const items = Array.from({ length: 30 }, (_, index) => `Item ${index + 1}`);
</script>

<template>
  <ScrollArea.Root class="h-48 w-64 rounded-md border">
    <ScrollArea.Viewport>
      <div class="p-4 text-sm">
        <p v-for="item in items" :key="item">{{ item }}</p>
      </div>
    </ScrollArea.Viewport>
    <ScrollArea.Scrollbar orientation="vertical">
      <ScrollArea.Thumb />
    </ScrollArea.Scrollbar>
    <ScrollArea.Corner />
  </ScrollArea.Root>
</template>
