<script lang="ts">
import source from "./marks.vue?raw";
export { source };
</script>

<script lang="ts" setup>
import { Slider } from "@pisagor/vue";
</script>

<template>
  <Slider show-markers :default-value="[5]" :marker-interval="2" :max="12" />
</template>
