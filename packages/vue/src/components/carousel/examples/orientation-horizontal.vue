<script setup lang="ts">
import { Carousel } from "..";

const slides = imageSlides();
</script>

<template>
  <Carousel :slides="slides" />
</template>
