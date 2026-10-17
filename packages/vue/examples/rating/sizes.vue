<script lang="ts">
import source from "./sizes.vue?raw";
export { source };
</script>

<script lang="ts" setup>
import { Rating } from "@pisagor/vue";
</script>

<template>
  <div class="flex flex-col gap-2">
    <Rating size="sm" :default-value="3" />
    <Rating size="md" :default-value="3" />
    <Rating size="lg" :default-value="3" />
  </div>
</template>
