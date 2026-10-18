<script lang="ts" setup>
import { CircularSlider } from "@pisagor/vue";
</script>

<template>
  <CircularSlider
    aria-label="Angle"
    :default-value="45"
    :markers="[0, 90, 180, 270]"
  />
</template>
