<script lang="ts" setup>
import { Carousel } from "..";
import { numberedSlides } from "./helpers";

const slides = numberedSlides(4);
</script>

<template>
  <Carousel autoplay loop :slides="slides" />
</template>
