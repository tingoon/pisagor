<script lang="ts">
import source from "./sizes.vue?raw";
export { source };
</script>

<script lang="ts" setup>
import { Kbd } from "@pisagor/vue";
</script>

<template>
  <div class="flex flex-wrap items-center gap-2">
    <Kbd size="sm">K</Kbd>
    <Kbd size="md">K</Kbd>
    <Kbd size="lg">K</Kbd>
  </div>
</template>
