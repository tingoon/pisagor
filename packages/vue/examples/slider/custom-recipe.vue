<script lang="ts" setup>
import { sliderRecipe } from "@pisagor/recipes";
import { Slider } from "@pisagor/vue";
import { tv } from "tailwind-variants";

const brandSliderRecipe = tv({
  extend: sliderRecipe,
  slots: {
    range: "bg-emerald-600",
    thumb: "border-emerald-600",
  },
  variants: {},
});
</script>

<template>
  <Slider :default-value="[40]" :recipe="brandSliderRecipe" />
</template>
