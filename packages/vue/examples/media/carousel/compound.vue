<script lang="ts" setup>
import { PhCaretLeft, PhCaretRight } from "@phosphor-icons/vue";
import { Button, Card, Carousel } from "@pisagor/vue";
import { numberedSlides } from "./helpers";

const slides = numberedSlides(8);
</script>

<template>
  <Carousel.Root :slide-count="slides.length">
    <Carousel.Control>
      <Carousel.PrevTrigger as-child>
        <Button :click-effect="false" pill size="icon-md" variant="outline">
          <PhCaretLeft aria-hidden="true" />
        </Button>
      </Carousel.PrevTrigger>
      <Carousel.NextTrigger as-child>
        <Button :click-effect="false" pill size="icon-md" variant="outline">
          <PhCaretRight aria-hidden="true" />
        </Button>
      </Carousel.NextTrigger>
    </Carousel.Control>
    <Carousel.ItemGroup>
      <Carousel.Item
        v-for="(slideId, index) in slides"
        :key="slideId.key"
        :index="index"
      >
        <Card>
          <Card.Content class="flex aspect-square items-center justify-center">
            <span class="text-4xl font-semibold">{{ index + 1 }}</span>
          </Card.Content>
        </Card>
      </Carousel.Item>
    </Carousel.ItemGroup>
  </Carousel.Root>
</template>
