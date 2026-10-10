<script lang="ts" setup>
import { ratingRecipe } from "@pisagor/recipes";
import { Rating } from "@pisagor/vue";
import { tv } from "tailwind-variants";

const brandRatingRecipe = tv({
  extend: ratingRecipe,
  slots: { base: "text-emerald-500" },
  variants: {},
});
</script>

<template>
  <Rating :count="3" :default-value="3" :recipe="brandRatingRecipe" />
</template>
