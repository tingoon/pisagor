<script lang="ts" setup>
import { Slider } from "../../../../../src/components/slider";
</script>

<template>
  <Slider show-markers :default-value="[5]" :marker-interval="2" :max="12" />
</template>
