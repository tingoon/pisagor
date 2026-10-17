<script lang="ts">
import source from "./disabled.vue?raw";
export { source };
</script>

<script lang="ts" setup>
import { CircularSlider } from "@pisagor/vue";
</script>

<template>
  <CircularSlider aria-label="Angle" disabled :default-value="45" />
</template>
