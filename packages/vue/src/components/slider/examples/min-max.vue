<script setup lang="ts">
import { Slider } from "..";
</script>

<template>
  <Slider :default-value="[50]" :max="200" :min="0" label="Volume" show-value />
</template>
