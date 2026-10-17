<script lang="ts">
import source from "./default.vue?raw";
export { source };
</script>

<script lang="ts" setup>
import { Skeleton } from "@pisagor/vue";
</script>

<template>
  <div class="flex items-center gap-2">
    <Skeleton.Circle class="size-16" />
    <Skeleton.Text :lines="3" />
  </div>
</template>
