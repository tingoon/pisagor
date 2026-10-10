<script lang="ts" setup>
import { highlightRecipe } from "@pisagor/recipes";
import { Highlight } from "@pisagor/vue";
import { tv } from "tailwind-variants";

const brandHighlightRecipe = tv({
  base: ["bg-emerald-500/20 text-emerald-800 dark:text-emerald-200"],
  extend: highlightRecipe,
});
</script>

<template>
  <p class="text-base text-foreground leading-relaxed">
    <Highlight
      query="Pisagor"
      text="Build faster with Pisagor components."
      :recipe="brandHighlightRecipe"
    />
  </p>
</template>
