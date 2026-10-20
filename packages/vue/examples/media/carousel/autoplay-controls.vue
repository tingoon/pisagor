<script lang="ts" setup>
import {
  PhCaretLeft,
  PhCaretRight,
  PhPause,
  PhPlay,
} from "@phosphor-icons/vue";
import { Button, Carousel } from "@pisagor/vue";
import { numberedSlides } from "./helpers";

const slides = numberedSlides(8);
</script>

<template>
  <Carousel.Root autoplay loop :slide-count="slides.length">
    <Carousel.Control>
      <Carousel.PrevTrigger as-child>
        <Button :click-effect="false" pill size="icon-md" variant="outline">
          <PhCaretLeft aria-hidden="true" />
        </Button>
      </Carousel.PrevTrigger>
      <Carousel.AutoplayTrigger as-child>
        <Button :click-effect="false" pill size="icon-md" variant="outline">
          <Carousel.AutoplayIndicator>
            <PhPause aria-hidden="true" />
            <template #fallback>
              <PhPlay aria-hidden="true" />
            </template>
          </Carousel.AutoplayIndicator>
        </Button>
      </Carousel.AutoplayTrigger>
      <Carousel.ProgressText />
      <Carousel.NextTrigger as-child>
        <Button :click-effect="false" pill size="icon-md" variant="outline">
          <PhCaretRight aria-hidden="true" />
        </Button>
      </Carousel.NextTrigger>
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
