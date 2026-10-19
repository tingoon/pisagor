<script lang="ts" setup>
import { CircularSlider } from "@pisagor/vue";
</script>

<template>
  <CircularSlider
    aria-label="Angle"
    :default-value="45"
    show-value
    value-suffix="°"
  />
</template>
