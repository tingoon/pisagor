<script lang="ts">
import source from "./autoplay.vue?raw";
export { source };
</script>

<script lang="ts" setup>
import { Carousel } from "@pisagor/vue";
import { numberedSlides } from "./helpers";

const slides = numberedSlides(8);
</script>

<template>
  <Carousel autoplay loop :slides="slides" />
</template>
