<script lang="ts">
import source from "./invalid.vue?raw";
export { source };
</script>

<script lang="ts" setup>
import { Slider } from "@pisagor/vue";
</script>

<template>
  <Slider :default-value="[50]" :invalid="true" />
</template>
