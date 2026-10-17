<script lang="ts">
import source from "./decorative.vue?raw";
export { source };
</script>

<script lang="ts" setup>
import { Separator } from "@pisagor/vue";
</script>

<template>
  <div class="flex items-center gap-3 text-sm">
    <span>Profile</span>
    <Separator class="h-4" decorative orientation="vertical" />
    <span>Settings</span>
  </div>
</template>
