<script lang="ts">
import source from "./default.vue?raw";
export { source };
</script>

<script lang="ts" setup>
import { CircularSlider } from "@pisagor/vue";
</script>

<template>
  <CircularSlider aria-label="Angle" :default-value="45">
    <CircularSlider.ValueText suffix="°" />
  </CircularSlider>
</template>
