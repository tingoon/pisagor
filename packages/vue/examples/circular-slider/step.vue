<script lang="ts" setup>
import { CircularSlider } from "@pisagor/vue";
</script>

<template>
  <CircularSlider
    aria-label="Angle"
    markers
    markers-at-steps
    :default-value="120"
    :step="60"
  />
</template>
