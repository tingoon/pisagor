<script setup lang="ts">
import { Slider } from "..";
</script>

<template>
  <Slider :default-value="[5]" :marker-interval="2" :max="12" show-markers />
</template>
