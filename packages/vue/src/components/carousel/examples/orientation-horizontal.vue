<script lang="ts" setup>
import { Carousel } from "..";

const slides = imageSlides();
</script>

<template>
  <Carousel :slides="slides" />
</template>
