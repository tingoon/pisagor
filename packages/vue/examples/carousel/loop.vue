<script lang="ts" setup>
import { Carousel } from "../../src/components/carousel";
import { numberedSlides } from "./helpers";

const slides = numberedSlides(4);
</script>

<template>
  <Carousel autoplay loop :slides="slides" />
</template>
