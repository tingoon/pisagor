<script lang="ts" setup >
import { CircularSlider } from "..";
</script>

<template>
  <CircularSlider aria-label="Angle" :default-value="45" :markers="[0, 90, 180, 270]" />
</template>
