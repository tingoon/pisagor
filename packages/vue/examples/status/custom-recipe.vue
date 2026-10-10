<script lang="ts" setup>
import { statusRecipe } from "@pisagor/recipes";
import { Status } from "@pisagor/vue";
import { tv } from "tailwind-variants";

const brandStatusRecipe = tv({
  base: ["ring-emerald-100 dark:ring-emerald-950"],
  extend: statusRecipe,
  variants: {
    variant: {
      default: ["bg-emerald-600 text-white"],
    },
  },
});
</script>

<template>
  <div class="flex items-center gap-2">
    <Status />
    <Status :recipe="brandStatusRecipe" />
  </div>
</template>
