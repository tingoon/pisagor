<script lang="ts" setup>
import { AspectRatio } from "..";
</script>

<template>
  <AspectRatio class="rounded-xl border bg-muted sm:[--ratio:16/9] md:[--ratio:1/1]">
    <div class="flex size-full items-center justify-center">
      <span class="select-none text-muted-foreground text-xs">16:9 → 1:1</span>
    </div>
  </AspectRatio>
</template>
