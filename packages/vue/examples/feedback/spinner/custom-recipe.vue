<script lang="ts" setup>
import { spinnerRecipe } from "@pisagor/recipes";
import { Spinner } from "@pisagor/vue";
import { tv } from "tailwind-variants";

const brandSpinnerRecipe = tv({
  base: ["text-emerald-600"],
  extend: spinnerRecipe,
});
</script>

<template>
  <Spinner :recipe="brandSpinnerRecipe" />
</template>
