<script setup lang="ts">
import { Carousel } from "..";

const slides = imageSources();
</script>

<template>
        <Carousel.Root class="h-40" loop orientation="vertical" :slide-count="slides.length">
          <Carousel.Control class="relative">
            <Carousel.PrevTrigger>Previous</Carousel.PrevTrigger>
            <Carousel.NextTrigger>Next</Carousel.NextTrigger>

            <Carousel.ItemGroup>
              <Carousel.Item v-for="(slide, index) in slides" :index="index" :key="slide.src">
                <img :alt="slide.alt" :height="300" :src="slide.src" :width="500" />
              </Carousel.Item>
            </Carousel.ItemGroup>
          </Carousel.Control>
          <Carousel.IndicatorGroup class="ml-4">
            <Carousel.Indicator
              v-for="(slide, index) in slides"
              class="size-10 rounded-md"
              :index="index"
              :key="slide.src"
            >
              <img :alt="slide.alt" :height="40" :src="slide.src" :width="40" />
            </Carousel.Indicator>
          </Carousel.IndicatorGroup>
        </Carousel.Root>
  
</template>
