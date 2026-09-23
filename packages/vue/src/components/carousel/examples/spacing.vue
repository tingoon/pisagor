<script lang="ts" setup >
import { Carousel } from "..";
import { numberedSlides } from "./helpers";

const slides = numberedSlides(8);
</script>

<template>
  <Carousel spacing="64px" :slides="slides" :slides-per-page="2" />
</template>
