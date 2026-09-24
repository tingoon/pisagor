<script lang="ts" setup>
import { Separator } from "..";
</script>

<template>
  <div class="flex h-5 items-center gap-2 text-sm *:[div]:space-y-1">
    <div>
      <p class="font-medium leading-none">Blog</p>
      <p class="text-muted-foreground text-xs">Latest posts</p>
    </div>
    <Separator orientation="vertical" />
    <div>
      <p class="font-medium leading-none">Docs</p>
      <p class="text-muted-foreground text-xs">API references</p>
    </div>
    <Separator orientation="vertical" />
    <div>
      <p class="font-medium leading-none">Source</p>
      <p class="text-muted-foreground text-xs">View on GitHub</p>
    </div>
  </div>
</template>
