<script setup lang="ts">
import { ScrollArea } from "..";

const items = Array.from({ length: 10 }, (_, i) => `Item ${i + 1}`);
</script>

<template>
        <ScrollArea class="h-auto rounded-lg border">
          <div class="flex w-max gap-2 p-4">
            <div
              v-for="item in items"
              :key="item"
              class="flex h-20 w-32 shrink-0 items-center justify-center rounded-md bg-muted"
            >
              <span class="font-medium text-sm">Item {{ item }}</span>
            </div>
          </div>
        </ScrollArea>
  
</template>
