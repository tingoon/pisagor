<script lang="ts">
import source from "./orientation-horizontal.vue?raw";
export { source };
</script>

<script lang="ts" setup>
import { Carousel } from "@pisagor/vue";
import { imageSlides } from "./helpers";

const slides = imageSlides();
</script>

<template>
  <Carousel :slides="slides" />
</template>
