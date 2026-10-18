<script lang="ts" setup>
import { buttonRecipe } from "@pisagor/recipes";
import { Button } from "@pisagor/vue";
import { tv } from "tailwind-variants";

const brandButtonRecipe = tv({
  extend: buttonRecipe,
  variants: {
    variant: {
      default: {
        base: [
          "bg-emerald-600",
          "border border-transparent shadow-xs",
          "text-white",
          "hover:bg-emerald-700",
          "focus-visible:border-background",
        ],
      },
    },
  },
});
</script>

<template>
  <div class="flex flex-wrap gap-2">
    <Button>Default recipe</Button>
    <Button :recipe="brandButtonRecipe">Brand recipe</Button>
  </div>
</template>
