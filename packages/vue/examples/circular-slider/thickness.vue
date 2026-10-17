<script lang="ts">
import source from "./thickness.vue?raw";
export { source };
</script>

<script lang="ts" setup>
import { CircularSlider } from "@pisagor/vue";
</script>

<template>
  <CircularSlider aria-label="Angle" :default-value="45" :thickness="14" />
</template>
