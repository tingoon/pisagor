<script lang="ts" setup>
import { CircularSlider } from "@pisagor/vue";
</script>

<template>
  <CircularSlider aria-label="Angle" :default-value="45">
    <CircularSlider.ValueText suffix="°" />
  </CircularSlider>
</template>
