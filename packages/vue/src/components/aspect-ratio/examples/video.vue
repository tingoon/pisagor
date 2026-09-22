<script setup lang="ts">
import { AspectRatio } from "..";
</script>

<template>
        <AspectRatio class="rounded-xl border bg-muted [--ratio:16/9]">
          <div class="flex size-full items-center justify-center">
            <span class="select-none text-muted-foreground text-xs">16:9</span>
          </div>
        </AspectRatio>
  
</template>
