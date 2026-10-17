<script lang="ts" setup>
import { AspectRatio } from "@pisagor/vue";
</script>

<template>
  <AspectRatio
    class="bg-muted rounded-xl border sm:[--ratio:16/9] md:[--ratio:1/1]"
  >
    <div class="flex size-full items-center justify-center">
      <span class="text-muted-foreground text-xs select-none">16:9 → 1:1</span>
    </div>
  </AspectRatio>
</template>
