<script lang="ts" setup>
import { Carousel } from "../../src/components/carousel";
import { imageSlides } from "./helpers";

const slides = imageSlides();
</script>

<template>
  <Carousel class="h-40" orientation="vertical" :slides="slides" />
</template>
