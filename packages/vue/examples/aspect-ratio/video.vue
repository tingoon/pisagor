<script lang="ts">
import source from "./video.vue?raw";
export { source };
</script>

<script lang="ts" setup>
import { AspectRatio } from "@pisagor/vue";
</script>

<template>
  <AspectRatio class="bg-muted rounded-xl border [--ratio:16/9]">
    <div class="flex size-full items-center justify-center">
      <span class="text-muted-foreground text-xs select-none">16:9</span>
    </div>
  </AspectRatio>
</template>
