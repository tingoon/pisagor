<script lang="ts" setup>
import { carouselRecipe } from "@pisagor/recipes";
import { Carousel } from "@pisagor/vue";
import { tv } from "tailwind-variants";
import { numberedSlides } from "./helpers";

const brandCarouselRecipe = tv({
  extend: carouselRecipe,
  slots: { indicator: "bg-emerald-600" },
  variants: {},
});
</script>

<template>
  <Carousel :recipe="brandCarouselRecipe" :slides="numberedSlides(8)" />
</template>
