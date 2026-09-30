<script lang="ts" setup>
import { Carousel } from "../../../../../src/components/carousel";
import { numberedSlides } from "./helpers";

const slides = numberedSlides(16);
</script>

<template>
  <Carousel :slides="slides" :slides-per-page="3" />
</template>
