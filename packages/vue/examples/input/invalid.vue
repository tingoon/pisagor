<script lang="ts">
import source from "./invalid.vue?raw";
export { source };
</script>

<script lang="ts" setup>
import { Input } from "@pisagor/vue";
</script>

<template>
  <Input placeholder="you@example.com" :invalid="true" />
</template>
