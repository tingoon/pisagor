<script lang="ts">
import source from "./square.vue?raw";
export { source };
</script>

<script lang="ts" setup>
import { AspectRatio } from "@pisagor/vue";
</script>

<template>
  <AspectRatio class="bg-muted rounded-xl border [--ratio:1/1]">
    <div class="flex size-full items-center justify-center">
      <span class="text-muted-foreground text-xs select-none">1:1</span>
    </div>
  </AspectRatio>
</template>
