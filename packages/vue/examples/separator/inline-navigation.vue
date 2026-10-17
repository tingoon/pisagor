<script lang="ts">
import source from "./inline-navigation.vue?raw";
export { source };
</script>

<script lang="ts" setup>
import { Separator } from "@pisagor/vue";
</script>

<template>
  <div class="flex h-5 items-center gap-2 text-sm *:[div]:space-y-1">
    <div>
      <p class="leading-none font-medium">Blog</p>
      <p class="text-muted-foreground text-xs">Latest posts</p>
    </div>
    <Separator orientation="vertical" />
    <div>
      <p class="leading-none font-medium">Docs</p>
      <p class="text-muted-foreground text-xs">API references</p>
    </div>
    <Separator orientation="vertical" />
    <div>
      <p class="leading-none font-medium">Source</p>
      <p class="text-muted-foreground text-xs">View on GitHub</p>
    </div>
  </div>
</template>
