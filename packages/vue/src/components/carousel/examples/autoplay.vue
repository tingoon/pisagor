<script setup lang="ts">
import { Carousel } from "..";
import { numberedSlides } from "./helpers";

const slides = numberedSlides(8);
</script>

<template>
  <Carousel autoplay loop :slides="slides" />
</template>
