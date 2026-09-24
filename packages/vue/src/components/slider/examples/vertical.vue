<script lang="ts" setup>
import { Slider } from "..";
</script>

<template>
  <div class="flex items-center justify-center gap-6">
    <Slider class="h-40" :default-value="[75]" :max="100" :orientation="'vertical'" :step="1" />
    <Slider class="h-40" :default-value="[25]" :max="100" :orientation="'vertical'" :step="1" />
  </div>
</template>
