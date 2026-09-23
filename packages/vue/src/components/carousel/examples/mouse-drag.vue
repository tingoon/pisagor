<script lang="ts" setup >
import { Carousel } from "..";
import { numberedSlides } from "./helpers";

const slides = numberedSlides(8);
</script>

<template>
  <Carousel allow-mouse-drag :slides="slides" />
</template>
