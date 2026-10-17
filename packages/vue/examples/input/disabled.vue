<script lang="ts">
import source from "./disabled.vue?raw";
export { source };
</script>

<script lang="ts" setup>
import { Input } from "@pisagor/vue";
</script>

<template>
  <Input placeholder="you@example.com" :disabled="true" />
</template>
