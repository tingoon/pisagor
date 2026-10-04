<script lang="ts" setup>
import { Slider } from "@pisagor/vue";
</script>

<template>
  <Slider show-markers :default-value="[5]" :marker-interval="2" :max="12" />
</template>
