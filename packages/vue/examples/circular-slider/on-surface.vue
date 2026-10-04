<script lang="ts" setup>
import { CircularSlider, Surface } from "@pisagor/vue";
</script>

<template>
  <Surface bordered padding="md" variant="default">
    <CircularSlider aria-label="Angle" :default-value="45">
      <CircularSlider.ValueText suffix="°" />
    </CircularSlider>
  </Surface>
</template>
