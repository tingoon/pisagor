<script lang="ts">
import source from "./disabled.vue?raw";
export { source };
</script>

<script lang="ts" setup>
import { NumberInput } from "@pisagor/vue";
</script>

<template>
  <NumberInput default-value="1" disabled />
</template>
