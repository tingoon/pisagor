<script lang="ts" setup>
import { ScrollArea } from "@pisagor/vue";

const items = Array.from({ length: 10 }, (_, i) => `Item ${i + 1}`);
</script>

<template>
  <ScrollArea class="h-auto rounded-lg border">
    <div class="flex w-max gap-2 p-4">
      <div
        class="bg-muted flex h-20 w-32 shrink-0 items-center justify-center rounded-md"
        v-for="item in items"
        :key="item"
      >
        <span class="text-sm font-medium">Item {{ item }}</span>
      </div>
    </div>
  </ScrollArea>
</template>
