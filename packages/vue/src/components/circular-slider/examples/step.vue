<script setup lang="ts">
import { CircularSlider } from "..";
</script>

<template>
  <CircularSlider aria-label="Angle" :default-value="120" markers markers-at-steps :step="60" />
</template>
