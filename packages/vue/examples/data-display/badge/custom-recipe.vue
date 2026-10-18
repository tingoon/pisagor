<script lang="ts" setup>
import { badgeRecipe } from "@pisagor/recipes";
import { Badge } from "@pisagor/vue";
import { tv } from "tailwind-variants";

const brandBadgeRecipe = tv({
  base: ["rounded-full"],
  extend: badgeRecipe,
  variants: {
    variant: {
      default: ["bg-emerald-600 text-white [a&]:hover:bg-emerald-700"],
    },
  },
});
</script>

<template>
  <div class="flex flex-wrap gap-2">
    <Badge>Default recipe</Badge>
    <Badge :recipe="brandBadgeRecipe">Brand recipe</Badge>
  </div>
</template>
