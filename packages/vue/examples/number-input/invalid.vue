<script lang="ts">
import source from "./invalid.vue?raw";
export { source };
</script>

<script lang="ts" setup>
import { NumberInput } from "@pisagor/vue";
</script>

<template>
  <NumberInput default-value="32" invalid />
</template>
