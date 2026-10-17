<script lang="ts" setup>
import { circularSliderRecipe } from "@pisagor/recipes";
import { CircularSlider } from "@pisagor/vue";
import { tv } from "tailwind-variants";

const brandCircularSliderRecipe = tv({
  extend: circularSliderRecipe,
  slots: {
    marker:
      "data-[state=at-value]:before:bg-emerald-600 data-[state=under-value]:before:bg-emerald-600",
    ringRange: "stroke-emerald-600",
  },
  variants: {},
});
</script>

<template>
  <CircularSlider :recipe="brandCircularSliderRecipe">
    <CircularSlider.ValueText suffix="°" />
  </CircularSlider>
</template>
