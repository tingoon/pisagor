<script lang="ts" setup>
import { Carousel } from "../../../../../src/components/carousel";
import { numberedSlides } from "./helpers";

const slides = numberedSlides(8);
</script>

<template>
  <Carousel :slides="slides" />
</template>
