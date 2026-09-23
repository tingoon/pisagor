<script lang="ts" setup >
import { Card } from "@pisagor/vue";
import { Carousel } from "..";
import { numberedSlides } from "./helpers";

const slides = numberedSlides(8);
</script>

<template>
        <Carousel.Root :slide-count="slides.length">
          <Carousel.Control>
            <Carousel.PrevTrigger>Previous</Carousel.PrevTrigger>
            <Carousel.NextTrigger>Next</Carousel.NextTrigger>
          </Carousel.Control>
          <Carousel.ItemGroup>
            <Carousel.Item v-for="(slideId, index) in slides" :key="slideId" :index="index" >
              <Card>
                <Card.Content class="flex aspect-square items-center justify-center">
                  <span class="font-semibold text-4xl">{{ index + 1 }}</span>
                </Card.Content>
              </Card>
            </Carousel.Item>
          </Carousel.ItemGroup>
        </Carousel.Root>
  
</template>
