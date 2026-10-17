<script lang="ts">
import source from "./number-story.vue?raw";
export { source };
</script>

<script lang="ts" setup>
import { Format } from "@pisagor/vue";
</script>

<template>
  <div class="inline-flex items-baseline gap-1">
    <span class="text-muted-foreground text-sm">Downloads</span>
    <span class="text-foreground font-medium tracking-tight tabular-nums">
      <Format.Number :value="1234567" />
    </span>
    <span class="text-muted-foreground text-sm">per month</span>
  </div>
</template>
