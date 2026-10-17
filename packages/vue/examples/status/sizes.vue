<script lang="ts">
import source from "./sizes.vue?raw";
export { source };
</script>

<script lang="ts" setup>
import { Status } from "@pisagor/vue";
</script>

<template>
  <div class="flex flex-wrap items-center gap-2">
    <Status size="sm" variant="info" />
    <Status size="md" variant="info" />
    <Status size="lg" variant="info" />
  </div>
</template>
