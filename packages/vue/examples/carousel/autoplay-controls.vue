<script lang="ts">
import source from "./autoplay-controls.vue?raw";
export { source };
</script>

<script lang="ts" setup>
import { Carousel } from "@pisagor/vue";
import { numberedSlides } from "./helpers";

const slides = numberedSlides(8);
</script>

<template>
  <Carousel.Root autoplay loop :slide-count="slides.length">
    <Carousel.Control>
      <Carousel.PrevTrigger>Previous</Carousel.PrevTrigger>
      <Carousel.AutoplayTrigger />
      <Carousel.ProgressText />
      <Carousel.NextTrigger>Next</Carousel.NextTrigger>
    </Carousel.Control>
    <Carousel.ItemGroup>
      <Carousel.Item
        v-for="(slide, index) in slides"
        :key="slide.key"
        :index="index"
      >
        {{ slide.content }}
      </Carousel.Item>
    </Carousel.ItemGroup>
  </Carousel.Root>
</template>
