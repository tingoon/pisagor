<script lang="ts" setup>
import { textareaRecipe } from "@pisagor/recipes";
import { Textarea } from "@pisagor/vue";
import { tv } from "tailwind-variants";

const brandTextareaRecipe = tv({
  extend: textareaRecipe,
  slots: {
    clearableRoot: "caret-emerald-600",
    rootLayout:
      "caret-emerald-600 focus-visible:border-emerald-600 focus-visible:ring-emerald-600/24",
  },
  variants: {},
});
</script>

<template>
  <Textarea placeholder="Write a message…" :recipe="brandTextareaRecipe" />
</template>
