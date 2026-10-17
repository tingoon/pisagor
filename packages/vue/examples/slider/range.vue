<script lang="ts">
import source from "./range.vue?raw";
export { source };
</script>

<script lang="ts" setup>
import { Slider } from "@pisagor/vue";
</script>

<template>
  <Slider :default-value="[40, 60]" />
</template>
