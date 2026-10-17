<script lang="ts">
import source from "./min-max.vue?raw";
export { source };
</script>

<script lang="ts" setup>
import { Slider } from "@pisagor/vue";
</script>

<template>
  <Slider label="Volume" show-value :default-value="[50]" :max="200" :min="0" />
</template>
