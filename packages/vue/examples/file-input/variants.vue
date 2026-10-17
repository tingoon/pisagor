<script lang="ts">
import source from "./variants.vue?raw";
export { source };
</script>

<script lang="ts" setup>
import { FileInput } from "@pisagor/vue";
</script>

<template>
  <div class="flex flex-col gap-2">
    <FileInput variant="primary" />
    <FileInput variant="secondary" />
  </div>
</template>
