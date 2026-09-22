<script setup lang="ts">
import { Carousel } from "..";
import { numberedSlides } from "./helpers";

const slides = numberedSlides(16);
</script>

<template>
  <Carousel :slides="slides" :slides-per-page="3" />
</template>
