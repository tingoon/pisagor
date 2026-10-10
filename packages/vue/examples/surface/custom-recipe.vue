<script lang="ts" setup>
import { surfaceRecipe } from "@pisagor/recipes";
import { Surface } from "@pisagor/vue";
import { tv } from "tailwind-variants";

const brandSurfaceRecipe = tv({
  base: surfaceRecipe.base,
  extend: surfaceRecipe,
  variants: {
    variant: {
      default: ["border-emerald-500/40 bg-emerald-500/5"],
    },
  },
});
</script>

<template>
  <Surface bordered class="p-4 text-sm" :recipe="brandSurfaceRecipe">
    Workspace settings
  </Surface>
</template>
