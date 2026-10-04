<script lang="ts" setup>
import { Slider } from "../../src/components/slider";
</script>

<template>
  <Slider label="Volume" show-value :default-value="[50]" :max="200" :min="0" />
</template>
