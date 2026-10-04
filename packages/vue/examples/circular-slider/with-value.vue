<script lang="ts" setup>
import { CircularSlider } from "../../src/components/circular-slider";
</script>

<template>
  <CircularSlider
    aria-label="Angle"
    :default-value="90"
    :size="120"
    :thickness="10"
  >
    <CircularSlider.ValueText suffix="°" :prefix="prefix()" />
  </CircularSlider>
</template>
