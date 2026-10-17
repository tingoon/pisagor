<script lang="ts">
import source from "./default.vue?raw";
export { source };
</script>

<script lang="ts" setup>
import { ScrollArea, Separator } from "@pisagor/vue";

const tags = Array.from({ length: 50 }, (_, i) => `v1.0.0-beta.${i}`);
</script>

<template>
  <ScrollArea class="h-64 w-48 rounded-md border">
    <div class="p-4">
      <h4 class="mb-4 text-sm leading-none font-medium">Tags</h4>
      <template v-for="tag in tags" :key="tag">
        <div class="text-sm">{{ tag }}</div>
        <Separator class="my-2" />
      </template>
    </div>
  </ScrollArea>
</template>
