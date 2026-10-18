<script lang="ts" setup>
import { toggleRecipe } from "@pisagor/recipes";
import { Toggle } from "@pisagor/vue";
import { tv } from "tailwind-variants";

const brandToggleRecipe = tv({
  base: ["data-[state=on]:bg-emerald-600 data-[state=on]:text-white"],
  extend: toggleRecipe,
});
</script>

<template>
  <Toggle default-pressed :recipe="brandToggleRecipe"> Bold </Toggle>
</template>
