<script lang="ts">
import source from "./variants.vue?raw";
export { source };
</script>

<script lang="ts" setup>
import { Input } from "@pisagor/vue";
</script>

<template>
  <div class="flex flex-col gap-2">
    <Input placeholder="Primary" variant="primary" />
    <Input placeholder="Secondary" variant="secondary" />
  </div>
</template>
