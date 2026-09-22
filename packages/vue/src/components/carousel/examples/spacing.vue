<script setup lang="ts">
import { Carousel } from "..";
import { numberedSlides } from "./helpers";

const slides = numberedSlides(8);
</script>

<template>
  <Carousel :slides="slides" :slides-per-page="2" spacing="64px" />
</template>
