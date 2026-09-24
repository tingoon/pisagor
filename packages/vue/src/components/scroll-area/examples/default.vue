<script lang="ts" setup>
import { Separator } from "@pisagor/vue";
import { ScrollArea } from "..";

const tags = Array.from({ length: 50 }, (_, i) => `v1.0.0-beta.${i}`);
</script>

<template>
  <ScrollArea class="h-64 w-48 rounded-md border">
    <div class="p-4">
      <h4 class="mb-4 font-medium text-sm leading-none">Tags</h4>
      <template v-for="tag in tags" :key="tag">
        <div class="text-sm">{{ tag }}</div>
        <Separator class="my-2" />
      </template>
    </div>
  </ScrollArea>
</template>
