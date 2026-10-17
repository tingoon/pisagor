<script lang="ts">
import source from "./disabled.vue?raw";
export { source };
</script>

<script lang="ts" setup>
import { Slider } from "@pisagor/vue";
</script>

<template>
  <Slider disabled :default-value="[50]" />
</template>
