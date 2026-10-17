<script lang="ts">
import source from "./custom-recipe.vue?raw";
export { source };
</script>

<script lang="ts" setup>
import { inputRecipe } from "@pisagor/recipes";
import { Input } from "@pisagor/vue";
import { tv } from "tailwind-variants";

const brandInputRecipe = tv({
  extend: inputRecipe,
  slots: {
    clearableRoot: "caret-emerald-600",
  },
  variants: {},
});
</script>

<template>
  <Input clearable default-value="Pisagor" :recipe="brandInputRecipe" />
</template>
