<script lang="ts">
import source from "./with-markers.vue?raw";
export { source };
</script>

<script lang="ts" setup>
import { CircularSlider } from "@pisagor/vue";
</script>

<template>
  <CircularSlider aria-label="Angle" markers :default-value="45" />
</template>
