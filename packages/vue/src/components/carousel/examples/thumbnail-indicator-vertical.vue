<script lang="ts" setup>
import { Carousel } from "..";

const slides = imageSources();
</script>

<template>
  <Carousel.Root
    class="h-40"
    loop
    orientation="vertical"
    :slide-count="slides.length"
  >
    <Carousel.Control class="relative">
      <Carousel.PrevTrigger>Previous</Carousel.PrevTrigger>
      <Carousel.NextTrigger>Next</Carousel.NextTrigger>

      <Carousel.ItemGroup>
        <Carousel.Item
          v-for="(slide, index) in slides"
          :key="slide.src"
          :index="index"
        >
          <img :alt="slide.alt" :height="300" :src="slide.src" :width="500">
        </Carousel.Item>
      </Carousel.ItemGroup>
    </Carousel.Control>
    <Carousel.IndicatorGroup class="ml-4">
      <Carousel.Indicator
        class="size-10 rounded-md"
        v-for="(slide, index) in slides"
        :key="slide.src"
        :index="index"
      >
        <img :alt="slide.alt" :height="40" :src="slide.src" :width="40">
      </Carousel.Indicator>
    </Carousel.IndicatorGroup>
  </Carousel.Root>
</template>
