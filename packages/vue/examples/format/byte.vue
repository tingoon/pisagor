<script lang="ts">
import source from "./byte.vue?raw";
export { source };
</script>

<script lang="ts" setup>
import { Format } from "@pisagor/vue";
</script>

<template>
  <div class="flex flex-col gap-1">
    <span class="text-muted-foreground text-sm">File size</span>
    <span
      class="text-foreground text-2xl font-semibold tracking-tight tabular-nums"
    >
      <Format.Byte :value="120000" />
    </span>
  </div>
</template>
