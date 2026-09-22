<script setup lang="ts">
import { CircularSlider } from "..";
</script>

<template>
  <CircularSlider aria-label="Angle" :default-value="45" :markers="[0, 90, 180, 270]" />
</template>
