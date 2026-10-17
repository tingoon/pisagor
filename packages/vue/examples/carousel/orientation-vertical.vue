<script lang="ts">
import source from "./orientation-vertical.vue?raw";
export { source };
</script>

<script lang="ts" setup>
import { Carousel } from "@pisagor/vue";
import { imageSlides } from "./helpers";

const slides = imageSlides();
</script>

<template>
  <Carousel class="h-40" orientation="vertical" :slides="slides" />
</template>
